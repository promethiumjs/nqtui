"use strict";

const hookStores = new WeakMap();
let currentHookStore;

function adaptHookStore(hookStoreId) {
  if (!hookStores.has(hookStoreId)) {
    let hooks;
    hooks = {
      nextStateSlotIdx: 0,
      nextEffectIdx: 0,
      nextMemoizationIdx: 0,
      stateSlots: [],
      effects: [],
      cleanups: [],
      memoizations: [],
    };
    hookStores.set(hookStoreId, hooks);
  }

  currentHookStore = hookStores.get(hookStoreId);
  currentHookStore.nextStateSlotIdx = 0;
  currentHookStore.nextEffectIdx = 0;
  currentHookStore.nextMemoizationIdx = 0;
}

function unadaptHookStore() {
  currentHookStore = null;
}

function resetHooks(hookStoreId) {
  try {
    for (let cleanup of currentHookStore.cleanups) {
      if (typeof cleanup == "function") {
        cleanup();
      }
    }
  } finally {
    hookStores.delete(hookStoreId);
    currentHookStore = null;
  }
}

function adaptReducer(reducerFn, initialVal, ...initialReduction) {
  // need to create this state-slot for this currentHookStore?
  if (!(currentHookStore.nextStateSlotIdx in currentHookStore.stateSlots)) {
    let slot = [
      typeof initialVal == "function" ? initialVal() : initialVal,
      function updateSlot(v) {
        slot[0] = reducerFn(slot[0], v);
      },
    ];
    currentHookStore.stateSlots[currentHookStore.nextStateSlotIdx] = slot;

    // run the reducer initially?
    if (initialReduction.length > 0) {
      currentHookStore.stateSlots[currentHookStore.nextStateSlotIdx][1](
        initialReduction[0]
      );
    }
  }

  return [...currentHookStore.stateSlots[currentHookStore.nextStateSlotIdx++]];
}

function adaptState(initialVal) {
  return adaptReducer(function reducer(prevVal, vOrFn) {
    return typeof vOrFn == "function" ? vOrFn(prevVal) : vOrFn;
  }, initialVal);
}

function guardsChanged(guards1, guards2) {
  // either guards list not set?
  if (guards1 === undefined || guards2 === undefined) {
    // force assumption of change in guards
    return true;
  }

  // guards lists of different length?
  if (guards1.length !== guards2.length) {
    // guards changed
    return true;
  }

  // check guards lists for differences
  //    (only shallow value comparisons)
  for (let [idx, guard] of guards1.entries()) {
    if (!Object.is(guard, guards2[idx])) {
      // guards changed
      return true;
    }
  }

  // assume no change in guards
  return false;
}

function adaptEffect(fn, ...guards) {
  // passed in any guards?
  if (guards.length > 0) {
    // only passed a single guards list?
    if (guards.length == 1 && Array.isArray(guards[0])) {
      guards = guards[0];
    }
  }
  // no guards passed
  // NOTE: different handling than an empty guards list like []
  else {
    guards = undefined;
  }

  // need to create this effect-slot for this currentHookStore?
  if (!(currentHookStore.nextEffectIdx in currentHookStore.effects)) {
    currentHookStore.effects[currentHookStore.nextEffectIdx] = [];
  }

  let effectIdx = currentHookStore.nextEffectIdx;
  let effect = currentHookStore.effects[effectIdx];

  // check guards?
  if (guardsChanged(effect[1], guards)) {
    // define effect handler
    effect[0] = function effect() {
      // run a previous cleanup first?
      if (typeof currentHookStore.cleanups[effectIdx] == "function") {
        try {
          currentHookStore.cleanups[effectIdx]();
        } finally {
          currentHookStore.cleanups[effectIdx] = undefined;
        }
      }

      // invoke the effect itself
      const ret = fn();

      // cleanup function returned, to be saved?
      if (typeof ret == "function") {
        currentHookStore.cleanups[effectIdx] = ret;
      }
    };
    effect[1] = guards;
  }

  currentHookStore.nextEffectIdx++;
}

function adaptMemo(fn, ...inputGuards) {
  // passed in any input-guards?
  if (inputGuards.length > 0) {
    // only passed a single inputGuards list?
    if (inputGuards.length == 1 && Array.isArray(inputGuards[0])) {
      inputGuards = inputGuards[0];
    }
  }
  // no input-guards passed
  // NOTE: different handling than an empty inputGuards list like []
  else {
    // the function itself is then used as the only input-guard
    inputGuards = [fn];
  }

  // need to create this memoization-slot for this currentHookStore?
  if (!(currentHookStore.nextMemoizationIdx in currentHookStore.memoizations)) {
    currentHookStore.memoizations[currentHookStore.nextMemoizationIdx] = [];
  }

  let memoization =
    currentHookStore.memoizations[currentHookStore.nextMemoizationIdx];

  // check input-guards?
  if (guardsChanged(memoization[1], inputGuards)) {
    try {
      // invoke the to-be-memoized function
      memoization[0] = fn();
    } finally {
      // save the new input-guards
      memoization[1] = inputGuards;
    }
  }

  currentHookStore.nextMemoizationIdx++;

  // return the memoized value
  return memoization[0];
}

function adaptCallback(fn, ...inputGuards) {
  return adaptMemo(function callback() {
    return fn;
  }, ...inputGuards);
}

function adaptRef() {
  // create a new {} object with a `current` property,
  // save it in a state slot
  var [ref] = adaptState({ current: initialValue });
  return ref;
}

function init() {}

function eject() {}

export {
  adaptHookStore,
  unadaptHookStore,
  adaptState,
  adaptReducer,
  adaptEffect,
  adaptCallback,
  adaptMemo,
  adaptRef,
  resetHooks,
};

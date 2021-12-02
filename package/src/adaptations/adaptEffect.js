import { getCurrentStore, getStore } from "./adaptations";
import guardsChanged from "./guardsChanged";

function adaptEffect(fn, guards) {
  const currentStore = getCurrentStore();

  if (currentStore && !currentStore.effects) {
    currentStore.effects = [];
    currentStore.currentAdaptationIds.effect = 0;
  }

  if (currentStore) {
    if (!(currentStore.currentAdaptationIds.effect in currentStore.effects)) {
      currentStore.effects[currentStore.currentAdaptationIds.effect] = [];
    }

    let effectId = currentStore.currentAdaptationIds.effect;
    let effect = currentStore.effects[effectId];

    if (guardsChanged(effect[1], guards)) {
      effect[0] = () => {
        if (currentStore.cleanups) {
          if (typeof currentStore.cleanups[effectId] == "function") {
            try {
              currentStore.cleanups[effectId]();
            } finally {
              currentStore.cleanups[effectId] = undefined;
            }
          }
        }

        const cleanUp = fn();

        if (typeof cleanUp == "function") {
          if (!currentStore.cleanups) {
            currentStore.cleanups = [];
          }

          currentStore.cleanups[effectId] = cleanUp;
        }
      };

      effect[1] = guards;
    }

    currentStore.currentAdaptationIds.effect++;
  } else {
    throw new Error(
      "adaptEffect() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

function runCleanupsAndEffects(storeId) {
  const store = getStore(storeId);

  if (store.effects) {
    for (let [id, [effect, guards]] of store.effects.entries()) {
      try {
        if (typeof effect == "function") {
          effect();
        }
      } finally {
        store.effects[id][0] = undefined;
      }
    }
  }
}

export { adaptEffect, runCleanupsAndEffects };

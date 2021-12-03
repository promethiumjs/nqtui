import { getCurrentStore, getStore } from "./adaptations";
import guardsChanged from "./guardsChanged";

function adaptEffect(fn, guards, beforeRender) {
  const currentStore = getCurrentStore();

  if (beforeRender) {
    beforeRenderEffectAdaptation(currentStore, fn, guards);
  } else {
    afterRenderEffectAdaptation(currentStore, fn, guards);
  }
}

function beforeRenderEffectAdaptation(currentStore, fn, guards) {
  if (currentStore && !currentStore.beforeEffects) {
    currentStore.beforeEffects = [];
    currentStore.currentAdaptationIds.beforeEffect = 0;
  }

  if (currentStore) {
    if (
      !(
        currentStore.currentAdaptationIds.beforeEffect in
        currentStore.beforeEffects
      )
    ) {
      currentStore.beforeEffects[
        currentStore.currentAdaptationIds.beforeEffect
      ] = [];
    }

    let beforeEffectId = currentStore.currentAdaptationIds.beforeEffect;
    let beforeEffect = currentStore.beforeEffects[beforeEffectId];

    if (guardsChanged(beforeEffect[1], guards)) {
      beforeEffect[0] = () => {
        if (currentStore.beforeCleanups) {
          if (
            typeof currentStore.beforeCleanups[beforeEffectId] == "function"
          ) {
            try {
              currentStore.beforeCleanups[beforeEffectId]();
            } finally {
              currentStore.beforeCleanups[beforeEffectId] = undefined;
            }
          }
        }

        const beforeCleanup = fn();

        if (typeof beforeCleanup == "function") {
          if (!currentStore.beforeCleanups) {
            currentStore.beforeCleanups = [];
          }

          currentStore.beforeCleanups[beforeEffectId] = beforeCleanup;
        }
      };

      beforeEffect[1] = guards;
    }

    runBeforeCleanupsAndEffects(currentStore);
    currentStore.currentAdaptationIds.beforeEffect++;
  } else {
    throw new Error(
      "adaptEffect() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

function runBeforeCleanupsAndEffects(store) {
  if (store.beforeEffects) {
    for (let [id, [beforeEffect, guards]] of store.beforeEffects.entries()) {
      try {
        if (typeof beforeEffect == "function") {
          beforeEffect();
        }
      } finally {
        store.beforeEffects[id][0] = undefined;
      }
    }
  }
}

function afterRenderEffectAdaptation(currentStore, fn, guards) {
  if (currentStore && !currentStore.afterEffects) {
    currentStore.afterEffects = [];
    currentStore.currentAdaptationIds.afterEffect = 0;
  }

  if (currentStore) {
    if (
      !(
        currentStore.currentAdaptationIds.afterEffect in
        currentStore.afterEffects
      )
    ) {
      currentStore.afterEffects[currentStore.currentAdaptationIds.afterEffect] =
        [];
    }

    let afterEffectId = currentStore.currentAdaptationIds.afterEffect;
    let afterEffect = currentStore.afterEffects[afterEffectId];

    if (guardsChanged(afterEffect[1], guards)) {
      afterEffect[0] = () => {
        if (currentStore.afterCleanups) {
          if (typeof currentStore.afterCleanups[afterEffectId] == "function") {
            try {
              currentStore.afterCleanups[afterEffectId]();
            } finally {
              currentStore.afterCleanups[afterEffectId] = undefined;
            }
          }
        }

        const afterCleanup = fn();

        if (typeof afterCleanup == "function") {
          if (!currentStore.afterCleanups) {
            currentStore.afterCleanups = [];
          }

          currentStore.afterCleanups[afterEffectId] = afterCleanup;
        }
      };

      afterEffect[1] = guards;
    }

    currentStore.currentAdaptationIds.afterEffect++;
  } else {
    throw new Error(
      "adaptEffect() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

function runAfterCleanupsAndEffects(storeId) {
  const store = getStore(storeId);

  if (store.afterEffects) {
    for (let [id, [afterEffect, guards]] of store.afterEffects.entries()) {
      try {
        if (typeof afterEffect == "function") {
          afterEffect();
        }
      } finally {
        store.afterEffects[id][0] = undefined;
      }
    }
  }
}

export { adaptEffect, runAfterCleanupsAndEffects, runBeforeCleanupsAndEffects };

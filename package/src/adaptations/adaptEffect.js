import { getCurrentStore } from "./adaptations";
import guardsChanged from "./guardsChanged";

function adaptEffect(fn, guards, beforeRender) {
  const currentStore = getCurrentStore();

  if (beforeRender) {
    beforeRenderEffectAdaptation(currentStore, fn, guards);
  } else {
    afterRenderEffectAdaptation(currentStore, fn, guards);
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
            currentStore.afterCleanups[afterEffectId]();
            currentStore.afterCleanups[afterEffectId] = undefined;
          }
        }

        if (!currentStore.afterCleanups) {
          currentStore.afterCleanups = [];
        }

        currentStore.afterCleanups[afterEffectId] = fn();
      };

      effectAndCleanupArray.push(afterEffect[0]);
      afterEffect[0] = null;
      afterEffect[1] = guards;
    }

    currentStore.currentAdaptationIds.afterEffect++;
  } else {
    throw new Error(
      "adaptEffect() can only be used inside a Component or a Custom Adaptation."
    );
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
            currentStore.beforeCleanups[beforeEffectId]();
            currentStore.beforeCleanups[beforeEffectId] = undefined;
          }
        }

        if (!currentStore.beforeCleanups) {
          currentStore.beforeCleanups = [];
        }

        currentStore.beforeCleanups[beforeEffectId] = fn();
      };

      beforeEffect[0]();
      beforeEffect[0] = null;
      beforeEffect[1] = guards;
    }

    currentStore.currentAdaptationIds.beforeEffect++;
  } else {
    throw new Error(
      "adaptEffect() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

const effectAndCleanupArray = [];

function detonateEffectAndCleanupArray() {
  const newEffectAndCleanupArray = [...effectAndCleanupArray];
  effectAndCleanupArray.length = 0;
  newEffectAndCleanupArray.forEach((effect) => effect());
}

export {
  adaptEffect,
  runBeforeCleanupsAndEffects,
  detonateEffectAndCleanupArray,
};

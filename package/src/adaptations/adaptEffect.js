import { getCurrentStore } from "./adaptations";
import guardsChanged from "./guardsChanged";

function adaptEffect(fn, guards) {
  const currentStore = getCurrentStore();

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

const effectAndCleanupArray = [];

function detonateEffectAndCleanupArray() {
  setTimeout(() => {
    const newEffectAndCleanupArray = [...effectAndCleanupArray];
    effectAndCleanupArray.length = 0;
    newEffectAndCleanupArray.forEach((effect) => effect());
  });
}

export { adaptEffect, detonateEffectAndCleanupArray };

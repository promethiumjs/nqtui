import { getCurrentStore } from "./adaptations";
import guardsChanged from "./guardsChanged";

function adaptEffect(fn, guards) {
  const currentStore = getCurrentStore();

  if (currentStore && !currentStore.asyncEffects) {
    currentStore.asyncEffects = [];
    currentStore.currentAdaptationIds.asyncEffect = 0;
  }

  if (currentStore) {
    if (
      !(
        currentStore.currentAdaptationIds.asyncEffect in
        currentStore.asyncEffects
      )
    ) {
      currentStore.asyncEffects[currentStore.currentAdaptationIds.asyncEffect] =
        [];
    }

    let asyncEffectId = currentStore.currentAdaptationIds.asyncEffect;
    let asyncEffect = currentStore.asyncEffects[asyncEffectId];

    if (guardsChanged(asyncEffect[1], guards)) {
      asyncEffect[0] = () => {
        if (currentStore.asyncCleanups) {
          if (typeof currentStore.asyncCleanups[asyncEffectId] == "function") {
            currentStore.asyncCleanups[asyncEffectId]();
            currentStore.asyncCleanups[asyncEffectId] = undefined;
          }
        }

        if (!currentStore.asyncCleanups) {
          currentStore.asyncCleanups = [];
        }

        currentStore.asyncCleanups[asyncEffectId] = fn();
      };

      addAsyncEffect(asyncEffect[0]);
      asyncEffect[0] = null;
      asyncEffect[1] = guards;
    }

    currentStore.currentAdaptationIds.asyncEffect++;
  } else {
    throw new Error(
      "adaptEffect() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

const asyncEffectAndCleanupArray = [];

function addAsyncEffect(effect) {
  asyncEffectAndCleanupArray.push(effect);

  if (asyncEffectAndCleanupArray.length === 1) {
    setTimeout(() => {
      const newEffectAndCleanupArray = [...asyncEffectAndCleanupArray];
      asyncEffectAndCleanupArray.length = 0;
      newEffectAndCleanupArray.forEach((effect) => effect());
    });
  }
}

export default adaptEffect;

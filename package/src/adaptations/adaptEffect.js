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

const asyncEffectAndCleanupArray1 = [];
const asyncEffectAndCleanupArray2 = [];
let one = true;

function addAsyncEffect(effect) {
  if (one) {
    asyncEffectAndCleanupArray1.push(effect);

    if (asyncEffectAndCleanupArray1.length === 1) {
      setTimeout(() => {
        one = false;
        asyncEffectAndCleanupArray1.forEach((effect) => effect());
        asyncEffectAndCleanupArray1.length = 0;
      });
    }
  } else {
    asyncEffectAndCleanupArray2.push(effect);

    if (asyncEffectAndCleanupArray2.length === 1) {
      setTimeout(() => {
        one = true;
        asyncEffectAndCleanupArray2.forEach((effect) => effect());
        asyncEffectAndCleanupArray2.length = 0;
      });
    }
  }
}

export default adaptEffect;

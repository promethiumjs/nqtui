import { getCurrentStore } from "./adaptations";
import guardsChanged from "./guardsChanged";

function adaptInvocationEffect(fn, guards) {
  const currentStore = getCurrentStore();

  if (currentStore && !currentStore.invocationEffects) {
    currentStore.invocationEffects = [];
    currentStore.currentAdaptationIds.invocationEffect = 0;
  }

  if (currentStore) {
    if (
      !(
        currentStore.currentAdaptationIds.invocationEffect in
        currentStore.invocationEffects
      )
    ) {
      currentStore.invocationEffects[
        currentStore.currentAdaptationIds.invocationEffect
      ] = [];
    }

    let invocationEffectId = currentStore.currentAdaptationIds.invocationEffect;
    let invocationEffect = currentStore.invocationEffects[invocationEffectId];

    if (guardsChanged(invocationEffect[1], guards)) {
      invocationEffect[0] = () => {
        if (currentStore.invocationCleanups) {
          if (
            typeof currentStore.invocationCleanups[invocationEffectId] ==
            "function"
          ) {
            currentStore.invocationCleanups[invocationEffectId]();
            currentStore.invocationCleanups[invocationEffectId] = undefined;
          }
        }

        if (!currentStore.invocationCleanups) {
          currentStore.invocationCleanups = [];
        }

        currentStore.invocationCleanups[invocationEffectId] = fn();
      };

      const invocationEffectStore = invocationEffect[0];
      queueMicrotask(() => invocationEffectStore());
      invocationEffect[0] = null;
      invocationEffect[1] = guards;
    }

    currentStore.currentAdaptationIds.invocationEffect++;
  } else {
    throw new Error(
      "adaptInvocationEffect() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptInvocationEffect;

import { getCurrentStore } from "./adaptations";
import guardsChanged from "./guardsChanged";

function adaptInstantEffect(fn, guards) {
  const currentStore = getCurrentStore();

  if (currentStore && !currentStore.instantEffects) {
    currentStore.instantEffects = [];
    currentStore.currentAdaptationIds.instantEffect = 0;
  }

  if (currentStore) {
    if (
      !(
        currentStore.currentAdaptationIds.instantEffect in
        currentStore.instantEffects
      )
    ) {
      currentStore.instantEffects[
        currentStore.currentAdaptationIds.instantEffect
      ] = [];
    }

    let instantEffectId = currentStore.currentAdaptationIds.instantEffect;
    let instantEffect = currentStore.instantEffects[instantEffectId];

    if (guardsChanged(instantEffect[1], guards)) {
      instantEffect[0] = () => {
        if (currentStore.instantCleanups) {
          if (
            typeof currentStore.instantCleanups[instantEffectId] == "function"
          ) {
            currentStore.instantCleanups[instantEffectId]();
            currentStore.instantCleanups[instantEffectId] = undefined;
          }
        }

        if (!currentStore.instantCleanups) {
          currentStore.instantCleanups = [];
        }

        currentStore.instantCleanups[instantEffectId] = fn();
      };

      instantEffect[0]();
      instantEffect[0] = null;
      instantEffect[1] = guards;
    }

    currentStore.currentAdaptationIds.instantEffect++;
  } else {
    throw new Error(
      "adaptInstantEffect() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptInstantEffect;

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
      addInvocationEffect(invocationEffectStore);
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

const invocationEffectArray1 = [];
const invocationEffectArray2 = [];
let one = true;

function addInvocationEffect(effect) {
  if (one) {
    invocationEffectArray1.push(effect);

    if (invocationEffectArray1.length === 1) {
      queueMicrotask(() => {
        one = false;
        invocationEffectArray1.forEach((effect) => effect());
        invocationEffectArray1.length = 0;
      });
    }
  } else {
    invocationEffectArray2.push(effect);

    if (invocationEffectArray2.length === 1) {
      queueMicrotask(() => {
        one = true;
        invocationEffectArray2.forEach((effect) => effect());
        invocationEffectArray2.length = 0;
      });
    }
  }
}

export default adaptInvocationEffect;

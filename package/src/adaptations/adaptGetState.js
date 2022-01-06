import { getCurrentStore, getCurrentStoreId } from "./adaptations";
import commonSetStateFunctionality from "./commonSetStateFunctionality";

function adaptGetState(initialStateValue) {
  const currentStore = getCurrentStore();
  const currentStoreId = getCurrentStoreId();

  if (currentStore && !currentStore.states) {
    currentStore.states = [];
    currentStore.currentAdaptationIds.state = 0;
  }

  if (currentStore) {
    if (!(currentStore.currentAdaptationIds.state in currentStore.states)) {
      const stateValue =
        typeof initialStateValue == "function"
          ? initialStateValue()
          : initialStateValue;

      const setStateFunction = (newStateValue, effectArray) => {
        state[2] =
          typeof newStateValue == "function"
            ? newStateValue(state[2])
            : newStateValue;

        commonSetStateFunctionality(effectArray, currentStoreId);
      };

      const state = [() => state[2], setStateFunction, stateValue];

      currentStore.states[currentStore.currentAdaptationIds.state] = state;
    }

    return currentStore.states[currentStore.currentAdaptationIds.state++];
  } else {
    throw new Error(
      "adaptGetState() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptGetState;

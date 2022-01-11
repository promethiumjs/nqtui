import { getCurrentStore, getCurrentStoreId } from "./adaptations";
import commonSetStateFunctionality from "./commonSetStateFunctionality";

function adaptState(initialStateValue) {
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
        const newState =
          typeof newStateValue == "function"
            ? newStateValue(state[0])
            : newStateValue;

        if (Object.is(newState, state[0])) return;

        state[0] = newState;
        commonSetStateFunctionality(effectArray, currentStoreId);
      };

      const state = [stateValue, setStateFunction];

      currentStore.states[currentStore.currentAdaptationIds.state] = state;
    }

    return currentStore.states[currentStore.currentAdaptationIds.state++];
  } else {
    throw new Error(
      "adaptState() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptState;

import { callRenderFunction } from "../helpers";
import { getCurrentStore } from "./adaptations";

function adaptState(initialStateValue) {
  const currentStore = getCurrentStore();

  if (currentStore && !currentStore.states) {
    currentStore.states = [];
    currentStore.currentAdaptationIds.state = 0;
  }

  if (currentStore) {
    if (!(currentStore.currentAdaptationIds.state in currentStore.states)) {
      let stateValue =
        typeof initialStateValue == "function"
          ? initialStateValue()
          : initialStateValue;

      let setStateFunction = (newStateValue, effectArray) => {
        state[0] =
          typeof newStateValue == "function"
            ? newStateValue(state[0])
            : newStateValue;

        if (effectArray) {
          effectArray.forEach((effect) => {
            if (effect.fn) {
              typeof effect.fn == "function"
                ? effect.fn(...effect.args)
                : effect.fn === "render" && callRenderFunction();
            } else {
              typeof effect == "function"
                ? effect()
                : effect === "render" && callRenderFunction();
            }
          });
        } else {
          callRenderFunction();
        }
      };

      let state = [stateValue, setStateFunction];

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

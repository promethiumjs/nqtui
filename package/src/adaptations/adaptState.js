import {
  getCurrentStore,
  getCurrentStoreId,
  renderComponent,
} from "./adaptations";

function adaptState(initialStateValue, mode) {
  const currentStore = getCurrentStore();
  const currentStoreId = getCurrentStoreId();

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

      const commonSetStateFunctionality = (effectArrayOrFunction) => {
        if (effectArrayOrFunction) {
          if (typeof effectArrayOrFunction == "function") {
            effectArrayOrFunction();
          } else {
            effectArrayOrFunction.forEach((effect) => {
              if (effect.fn) {
                typeof effect.fn == "function"
                  ? effect.fn(...effect.args)
                  : effect.fn === "render" && renderComponent(currentStoreId);
              } else {
                typeof effect == "function"
                  ? effect()
                  : effect === "render" && renderComponent(currentStoreId);
              }
            });
          }
        } else {
          renderComponent(currentStoreId);
        }
      };

      let setStateFunction;
      if (!mode) {
        setStateFunction = (newStateValue, effectArray) => {
          state[0] =
            typeof newStateValue == "function"
              ? newStateValue(state[0])
              : newStateValue;

          commonSetStateFunctionality(effectArray);
        };
      } else if (mode === "getter") {
        setStateFunction = (newStateValue, effectArray) => {
          state[2] =
            typeof newStateValue == "function"
              ? newStateValue(state[2])
              : newStateValue;

          commonSetStateFunctionality(effectArray);
        };
      } else if (mode === "unified") {
        setStateFunction = (newStateValue, effectArray) => {
          Object.assign(state[0], newStateValue);

          commonSetStateFunctionality(effectArray);
        };
      }

      let state;
      if (!mode || mode === "unified") {
        state = [stateValue, setStateFunction];
      } else if (mode === "getter") {
        state = [() => state[2], setStateFunction, stateValue];
      }

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

import { renderComponent } from "./adaptations";

function commonSetStateFunctionality(effectArrayOrFunction, currentStoreId) {
  if (effectArrayOrFunction) {
    if (typeof effectArrayOrFunction == "function") {
      effectArrayOrFunction();
    } else {
      effectArrayOrFunction.forEach((effect) => {
        if (effect.fn) {
          typeof effect.fn == "function"
            ? effect.fn(...effect.args)
            : (effect.fn === "render" || effect.fn === "update") &&
              renderComponent(currentStoreId);
        } else {
          typeof effect == "function"
            ? effect()
            : (effect === "render" || effect === "update") &&
              renderComponent(currentStoreId);
        }
      });
    }
  } else {
    renderComponent(currentStoreId);
  }
}

export default commonSetStateFunctionality;

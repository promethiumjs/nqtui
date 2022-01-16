import { renderComponent } from "./adaptations";

function commonSetStateFunctionality(
  effectArrayOrFunction,
  args,
  currentStoreId
) {
  if (effectArrayOrFunction) {
    if (typeof effectArrayOrFunction == "function") {
      effectArrayOrFunction(...args);
    } else {
      effectArrayOrFunction.forEach((effect) => {
        effect === "render" || effect === "update"
          ? renderComponent(currentStoreId)
          : effect(...args);
      });
    }
  } else {
    renderComponent(currentStoreId);
  }
}

export default commonSetStateFunctionality;

import adaptMemo from "./adaptMemo";
import {
  getCurrentStore,
  getCurrentStoreId,
  renderComponent,
} from "./adaptations";

function adaptEvents(eventArrayOrFuntion, guards) {
  const currentStore = getCurrentStore();
  const currentStoreId = getCurrentStoreId();

  if (currentStore) {
    return adaptMemo(() => {
      return (...eventParams) =>
        emitEvents(eventParams, eventArrayOrFuntion, currentStoreId);
    }, guards);
  } else {
    throw new Error(
      "adaptEvents() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

function emitEvents(eventParams, eventArrayOrFuntion, currentStoreId) {
  if (eventArrayOrFuntion) {
    if (typeof eventArrayOrFuntion == "function") {
      eventArrayOrFuntion(...eventParams);
    } else {
      eventArrayOrFuntion.forEach((event) => {
        if (event.fn) {
          typeof event.fn == "function"
            ? event.fn(...event.args)
            : event.fn === "render" && renderComponent(currentStoreId);
        } else {
          typeof event == "function"
            ? event(...eventParams)
            : event === "render" && renderComponent(currentStoreId);
        }
      });
    }
  } else {
    renderComponent(currentStoreId);
  }
}

export default adaptEvents;

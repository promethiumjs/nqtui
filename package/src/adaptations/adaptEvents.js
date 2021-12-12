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
      return () => emitEvents(eventArrayOrFuntion, currentStoreId);
    }, guards);
  } else {
    throw new Error(
      "adaptEvents() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

function emitEvents(eventArrayOrFuntion, currentStoreId) {
  if (eventArrayOrFuntion) {
    if (typeof eventArrayOrFuntion == "function") {
      eventArrayOrFuntion();
    } else {
      eventArrayOrFuntion.forEach((event) => {
        if (event.fn) {
          typeof event.fn == "function"
            ? event.fn(...event.args)
            : event.fn === "render" && renderComponent(currentStoreId);
        } else {
          typeof event == "function"
            ? event()
            : event === "render" && renderComponent(currentStoreId);
        }
      });
    }
  } else {
    renderComponent(currentStoreId);
  }
}

export default adaptEvents;

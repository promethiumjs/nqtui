import {
  getCurrentStore,
  getCurrentStoreId,
  renderComponent,
} from "./adaptations";

function adaptFunction(eventArrayOrFuntion, ...setupEventArgs) {
  const currentStore = getCurrentStore();
  const currentStoreId = getCurrentStoreId();

  if (currentStore && !currentStore.events) {
    currentStore.events = [];
    currentStore.currentAdaptationIds.event = 0;
  }

  if (currentStore) {
    if (!(currentStore.currentAdaptationIds.event in currentStore.events)) {
      currentStore.events[currentStore.currentAdaptationIds.event] = [];

      let event = currentStore.events[currentStore.currentAdaptationIds.event];
      event[0] = (...invocationEventArgs) =>
        emitEvent(
          eventArrayOrFuntion,
          currentStoreId,
          event[1],
          invocationEventArgs
        );
    }
    let event = currentStore.events[currentStore.currentAdaptationIds.event];
    event[1] = setupEventArgs;

    currentStore.currentAdaptationIds.event++;
    return event[0];
  } else {
    throw new Error(
      "adaptFunction() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

function emitEvent(
  eventArrayOrFuntion,
  currentStoreId,
  setupEventArgs,
  invocationEventArgs
) {
  if (eventArrayOrFuntion) {
    if (typeof eventArrayOrFuntion == "function")
      eventArrayOrFuntion(...setupEventArgs, ...invocationEventArgs);
    else
      eventArrayOrFuntion.forEach((event) => {
        typeof event == "function"
          ? event(...setupEventArgs, ...invocationEventArgs)
          : (event === "render" || event === "update") &&
            renderComponent(currentStoreId);
      });
  } else {
    renderComponent(currentStoreId);
  }
}

export default adaptFunction;

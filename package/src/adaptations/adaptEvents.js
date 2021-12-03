import { getCurrentStore } from "./adaptations";
import guardsChanged from "./guardsChanged";
import { callRenderFunction } from "../helpers";

function adaptEvents(eventArray) {
  const currentStore = getCurrentStore();

  if (currentStore && !currentStore.eventEmitters) {
    currentStore.eventEmitters = [];
    currentStore.currentAdaptationIds.eventEmitter = 0;
  }

  if (currentStore) {
    if (
      !(
        currentStore.currentAdaptationIds.eventEmitter in
        currentStore.eventEmitters
      )
    ) {
      const eventEmitter = (eventArguments) => {
        eventArray.forEach((event) => {
          typeof event == "function"
            ? event(eventArguments)
            : event === "render" && callRenderFunction();
        });
      };

      currentStore.eventEmitters[
        currentStore.currentAdaptationIds.eventEmitter
      ] = eventEmitter;
    }

    return currentStore.eventEmitters[
      currentStore.currentAdaptationIds.eventEmitter++
    ];
  } else {
    throw new Error(
      "adaptEvents() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptEvents;

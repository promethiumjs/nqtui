import { getCurrentStore } from "./adaptations";
import guardsChanged from "./guardsChanged";
import { callRenderFunction } from "../helpers";

function adaptEvents(eventArray, eventObject) {
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
      currentStore.eventEmitters[
        currentStore.currentAdaptationIds.eventEmitter
      ] = [];
    }

    let eventEmitter =
      currentStore.eventEmitters[
        currentStore.currentAdaptationIds.eventEmitter
      ];

    const guards = [];
    if (eventObject) {
      Object.keys(eventObject).forEach((eventObjectKey) =>
        guards.push(eventObject[eventObjectKey])
      );
    }

    if (guardsChanged(eventEmitter[1], guards)) {
      let emitter = () => {
        eventArray.forEach((event) => {
          typeof event == "function"
            ? event(eventObject)
            : event === "render" && callRenderFunction();
        });
      };

      try {
        eventEmitter[0] = emitter;
      } finally {
        eventEmitter[1] = guards;
      }
    }

    currentStore.currentAdaptationIds.eventEmitter++;
    return eventEmitter[0];
  } else {
    throw new Error(
      "adaptEvents() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptEvents;

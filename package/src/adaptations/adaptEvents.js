import { getCurrentStore } from "./adaptations";
import { callRenderFunction } from "../helpers";

function adaptEvents(eventsObject) {
  const currentStore = getCurrentStore();

  if (currentStore && !currentStore.events) {
    currentStore.events = {};
  }

  if (currentStore) {
    let eventArray = [];
    Object.keys(eventsObject).forEach((eventKey) => {
      if (!currentStore.events[eventKey]) {
        if (typeof eventsObject[eventKey] == "function") {
          currentStore.events[eventKey] = eventsObject[eventKey];
        }
      }

      eventsObject[eventKey] === "render"
        ? eventArray.push(callRenderFunction)
        : eventArray.push(currentStore.events[eventKey]);
    });

    return () => {
      eventArray.forEach(
        (eventFunction) => typeof eventFunction == "function" && eventFunction()
      );
    };
  } else {
    throw new Error(
      "adaptEvents() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptEvents;

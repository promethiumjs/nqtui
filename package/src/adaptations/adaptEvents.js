import { callRenderFunction } from "../helpers";

function adaptEvents(eventArray) {
  return () => emitEvents(eventArray);
}

function emitEvents(eventArray) {
  eventArray.forEach((event) => {
    if (event.fn) {
      typeof event.fn == "function"
        ? event.fn(event.args)
        : event.fn === "render" && callRenderFunction();
    } else {
      typeof event == "function"
        ? event()
        : event === "render" && callRenderFunction();
    }
  });
}

export default adaptEvents;

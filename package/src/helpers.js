import { adaptStore, releaseCurrentStore } from "./adaptations/adaptations";
import { runCleanupsAndEffects } from "./adaptations/adaptEffect";

let storeId = null;

function createStoreId() {
  storeId = {};
}

let renderFunction = null;

function setRenderFunction(newRenderFunction) {
  renderFunction = newRenderFunction;

  createStoreId();
}

function callRenderFunction() {
  adaptStore(storeId);

  try {
    renderFunction();
    releaseCurrentStore();
  } finally {
    runCleanupsAndEffects(storeId);
  }
}

export { setRenderFunction, callRenderFunction, createStoreId };

import { adaptStore, releaseCurrentStore } from "./adaptations/adaptations";
import { runAfterCleanupsAndEffects } from "./adaptations/adaptEffect";

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
    runAfterCleanupsAndEffects(storeId);
  }
}

export { setRenderFunction, callRenderFunction, createStoreId };

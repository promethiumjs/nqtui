import { adaptStore, releaseCurrentStore } from "./adaptations/adaptations";
import { detonateEffectAndCleanupArray } from "./adaptations/adaptEffect";

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
  renderFunction();
  releaseCurrentStore();
  detonateEffectAndCleanupArray();
}

export { setRenderFunction, callRenderFunction, createStoreId };

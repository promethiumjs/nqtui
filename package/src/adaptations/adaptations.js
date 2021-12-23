import { detonateEffectAndCleanupArray } from "./adaptEffect";

let currentStore;
let currentStoreId;
const stores = new WeakMap();

function adaptStore(storeId) {
  if (!stores.has(storeId)) {
    const store = {
      currentAdaptationIds: {},
    };

    stores.set(storeId, store);
  }

  currentStore = stores.get(storeId);
  currentStoreId = storeId;

  Object.keys(currentStore.currentAdaptationIds).forEach(
    (id) => (currentStore.currentAdaptationIds[id] = 0)
  );
}

function getCurrentStore() {
  return currentStore;
}

function getCurrentStoreId() {
  return currentStoreId;
}

function getStore(storeId) {
  return stores.get(storeId);
}

function releaseCurrentStore() {
  currentStore = null;
}

function detonateStore(storeId) {
  const currentStore = getStore(storeId);

  if (currentStore.instantCleanups) {
    currentStore.instantCleanups.forEach(
      (cleanup) => typeof cleanup == "function" && cleanup()
    );
  }

  if (currentStore.invocationCleanups) {
    currentStore.invocationCleanups.forEach(
      (cleanup) => typeof cleanup == "function" && cleanup()
    );
  }

  if (currentStore.afterCleanups) {
    currentStore.afterCleanups.forEach(
      (cleanup) => typeof cleanup == "function" && cleanup()
    );
  }

  stores.delete(storeId);
}

function renderComponent(storeId) {
  if (storeId.Component) {
    storeId.setValue(storeId.Component());
    releaseCurrentStore();
    detonateEffectAndCleanupArray();
  }
}

export {
  adaptStore,
  releaseCurrentStore,
  detonateStore,
  getCurrentStore,
  getCurrentStoreId,
  getStore,
  renderComponent,
};

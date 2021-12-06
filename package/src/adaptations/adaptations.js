let currentStore;
const stores = new WeakMap();

function adaptStore(storeId) {
  if (!stores.has(storeId)) {
    const store = {
      currentAdaptationIds: {},
    };

    stores.set(storeId, store);
  }

  currentStore = stores.get(storeId);
  Object.keys(currentStore.currentAdaptationIds).forEach(
    (id) => (currentStore.currentAdaptationIds[id] = 0)
  );
}

function getCurrentStore() {
  return currentStore;
}

function getStore(storeId) {
  return stores.get(storeId);
}

function releaseCurrentStore() {
  currentStore = null;
}

function detonateStore(storeId) {
  const currentStore = getStore(storeId);

  if (currentStore.beforeCleanups) {
    currentStore.beforeCleanups.forEach(
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

export {
  adaptStore,
  releaseCurrentStore,
  detonateStore,
  getCurrentStore,
  getStore,
};

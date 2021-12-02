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

  try {
    if (currentStore.cleanups) {
      for (let cleanup of currentStore.cleanups) {
        if (typeof cleanup == "function") {
          cleanup();
        }
      }
    }
  } finally {
    stores.delete(storeId);
  }
}

export {
  adaptStore,
  releaseCurrentStore,
  detonateStore,
  getCurrentStore,
  getStore,
};

//use WeakMap to store adaptation stores for more memory efficiency and
//potentially faster access time for stores.
const stores = new WeakMap();
let currentStore;
let currentStoreId;

function adaptStore(storeId) {
  //create adaptation store if it doesn't exist and add up.
  if (!stores.has(storeId)) {
    const store = {
      currentAdaptationIds: {},
    };

    stores.set(storeId, store);
  }

  //prepare adaptation store and its id for access.
  currentStore = stores.get(storeId);
  currentStoreId = storeId;

  //reset adaptation ids to enable adaptation data to be accessed in the
  //right order.
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
  currentStoreId = null;
}

//call all pending store cleanups and destroy store.
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

  if (currentStore.asyncCleanups) {
    currentStore.asyncCleanups.forEach(
      (cleanup) => typeof cleanup == "function" && cleanup()
    );
  }

  if (currentStore.particleCleanups) {
    currentStore.particleCleanups.forEach(
      (cleanup) => typeof cleanup == "function" && cleanup()
    );
  }

  if (currentStore.derivativeCleanups) {
    currentStore.derivativeCleanups.forEach(
      (cleanup) => typeof cleanup == "function" && cleanup()
    );
  }

  stores.delete(storeId);
}

//render associated component when called with store ids of components.
//when called with store ids of custom adaptations and other non-components,
//call their update function.
function renderComponent(storeId) {
  if (storeId.Component) {
    storeId.setValue(storeId.Component(storeId.oldProps));
    releaseCurrentStore();
  }
}

let preventMultipleRenders = false;

function getPreventMultipleRenders() {
  return preventMultipleRenders;
}

function setPreventMultipleRenders(boolean) {
  preventMultipleRenders = boolean;
}

export {
  adaptStore,
  releaseCurrentStore,
  detonateStore,
  getCurrentStore,
  getCurrentStoreId,
  getStore,
  renderComponent,
  getPreventMultipleRenders,
  setPreventMultipleRenders,
};

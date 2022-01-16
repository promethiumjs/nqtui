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

  if (!currentStore.currentAdaptationIdStrings) {
    currentStore.currentAdaptationIdStrings = "unset";

    return;
  }

  if (currentStore.currentAdaptationIdStrings === "unset") {
    currentStore.currentAdaptationIdStrings = Object.keys(
      currentStore.currentAdaptationIds
    );
  }

  //reset adaptation ids to enable adaptation data to be accessed in the
  //right order.
  const currentAdaptationIdStrings = currentStore.currentAdaptationIdStrings;
  const length = currentStore.currentAdaptationIdStrings.length;
  for (let i = 0; i < length; i++) {
    const adaptationIdString = currentAdaptationIdStrings[i];
    currentStore.currentAdaptationIds[adaptationIdString] = 0;
  }
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

const renderArray1 = [];
const renderArray2 = [];
let one = true;
//render associated component when called with store ids of components.
//when called with store ids of custom adaptations and other non-components,
//call their update function.
function renderComponent(storeId) {
  if (one) {
    renderArray1.push(storeId);

    if (renderArray1.length === 1) {
      queueMicrotask(() => {
        one = false;

        renderArray1.forEach((storeId) => {
          if (storeId.Component) {
            storeId.setValue(storeId.Component(storeId.oldProps));
            releaseCurrentStore();
          } else if (storeId.call) {
            storeId.call();
          }
        });

        renderArray1.length = 0;
      });
    }
  } else {
    renderArray2.push(storeId);

    if (renderArray2.length === 1) {
      queueMicrotask(() => {
        one = true;

        renderArray2.forEach((storeId) => {
          if (storeId.Component) {
            storeId.setValue(storeId.Component(storeId.oldProps));
            releaseCurrentStore();
          } else if (storeId.call) {
            storeId.call();
          }
        });

        renderArray2.length = 0;
      });
    }
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

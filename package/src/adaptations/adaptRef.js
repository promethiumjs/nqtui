import { getCurrentStore } from "./adaptations";

function adaptRef(initialRefValue) {
  const currentStore = getCurrentStore();

  if (currentStore && !currentStore.refs) {
    currentStore.refs = [];
    currentStore.currentAdaptationIds.ref = 0;
  }

  if (currentStore) {
    if (!(currentStore.currentAdaptationIds.ref in currentStore.refs)) {
      let ref = {};
      ref.current = initialRefValue;

      currentStore.refs[currentStore.currentAdaptationIds.ref] = ref;
    }

    return currentStore.refs[currentStore.currentAdaptationIds.ref++];
  } else {
    throw new Error(
      "adaptRef() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptRef;

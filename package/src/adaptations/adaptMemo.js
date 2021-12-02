import { getCurrentStore } from "./adaptations";
import guardsChanged from "./guardsChanged";

function adaptMemo(fn, guards) {
  const currentStore = getCurrentStore();

  if (currentStore && !currentStore.memos) {
    currentStore.memos = [];
    currentStore.currentAdaptationIds.memo = 0;
  }

  if (!guards) {
    guards = [fn];
  }

  if (currentStore) {
    if (!(currentStore.currentAdaptationIds.memo in currentStore.memos)) {
      currentStore.memos[currentStore.currentAdaptationIds.memo] = [];
    }

    let memo = currentStore.memos[currentStore.currentAdaptationIds.memo];

    if (guardsChanged(memo[1], guards)) {
      try {
        memo[0] = fn();
      } finally {
        memo[1] = guards;
      }
    }

    currentStore.currentAdaptationIds.memo++;
    return memo[0];
  } else {
    throw new Error(
      "adaptMemo() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptMemo;

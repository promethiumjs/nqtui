import adaptMemo from "./adaptMemo";
import { getCurrentStore } from "./adaptations";

function adaptCallback(fn, inputGuards) {
  const currentStore = getCurrentStore();

  if (currentStore) {
    return adaptMemo(() => {
      return fn;
    }, inputGuards);
  } else {
    throw new Error(
      "adaptCallback() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptCallback;

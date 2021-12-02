import adaptMemo from "./adaptMemo";
import { getCurrentStore } from "./adaptations";

function adaptCallback(fn, guards) {
  const currentStore = getCurrentStore();

  if (currentStore) {
    return adaptMemo(() => {
      return fn;
    }, guards);
  } else {
    throw new Error(
      "adaptCallback() can only be used inside a Component or a Custom Adaptation."
    );
  }
}

export default adaptCallback;

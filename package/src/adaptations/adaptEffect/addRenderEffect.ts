import { ExecuteFn } from "./effectTypes";

const renderEffectArray1 = [];
const renderEffectArray2 = [];
let one = true;

export default function addRenderEffect(executeFn: ExecuteFn) {
  const renderEffectArray = one ? renderEffectArray1 : renderEffectArray2;
  const newOne = one ? false : true;

  renderEffectArray.push(executeFn);

  if (renderEffectArray.length === 1) {
    queueMicrotask(() => {
      one = newOne;
      renderEffectArray.forEach((executeFn) => executeFn());
      renderEffectArray.length = 0;
    });
  }
}

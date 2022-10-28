import { ExecuteFn } from "./effectTypes";

const asyncEffectAndCleanupArray1 = [];
const asyncEffectAndCleanupArray2 = [];
let one = true;

export default function addAsyncEffect(executeFn: ExecuteFn) {
  const asyncEffectAndCleanupArray = one
    ? asyncEffectAndCleanupArray1
    : asyncEffectAndCleanupArray2;
  const newOne = one ? false : true;

  asyncEffectAndCleanupArray.push(executeFn);

  if (asyncEffectAndCleanupArray.length === 1) {
    setTimeout(() => {
      one = newOne;
      asyncEffectAndCleanupArray.forEach((executeFn) => executeFn());
      asyncEffectAndCleanupArray.length = 0;
    });
  }
}

const changedArray1 = [];
const changedArray2 = [];
let one = true;

export default function queueRevertChangedToTrue(storeId) {
  if (one) {
    changedArray1.push(storeId);

    if (changedArray1.length === 1) {
      queueMicrotask(() => {
        one = false;
        changedArray1.forEach((storeId) => (storeId.changed = true));
        changedArray1.length = 0;
      });
    }
  } else {
    changedArray2.push(storeId);

    if (changedArray2.length === 1) {
      queueMicrotask(() => {
        one = true;
        changedArray2.forEach((storeId) => (storeId.changed = true));
        changedArray2.length = 0;
      });
    }
  }
}

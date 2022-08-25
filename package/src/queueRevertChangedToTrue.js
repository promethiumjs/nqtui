const changedArray1 = [];
const changedArray2 = [];
let one = true;

export default function queueRevertChangedToTrue(componentAsyncDirective) {
  if (one) {
    changedArray1.push(componentAsyncDirective);

    if (changedArray1.length === 1) {
      queueMicrotask(() => {
        one = false;
        changedArray1.forEach(
          (componentAsyncDirective) => (componentAsyncDirective.changed = true)
        );
        changedArray1.length = 0;
      });
    }
  } else {
    changedArray2.push(componentAsyncDirective);

    if (changedArray2.length === 1) {
      queueMicrotask(() => {
        one = true;
        changedArray2.forEach(
          (componentAsyncDirective) => (componentAsyncDirective.changed = true)
        );
        changedArray2.length = 0;
      });
    }
  }
}

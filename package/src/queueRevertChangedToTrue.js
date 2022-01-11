const changedArray = [];

export default function queueRevertChangedToTrue(storeId) {
  changedArray.push(storeId);

  if (changedArray.length === 1) {
    queueMicrotask(() => {
      const newChangedArray = [...changedArray];
      changedArray.length = 0;
      newChangedArray.forEach((storeId) => (storeId.changed = true));
    });
  }
}

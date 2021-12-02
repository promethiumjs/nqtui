function guardsChanged(guards1, guards2) {
  if (!guards1 || !guards2) {
    return true;
  }

  if (guards1.length !== guards2.length) {
    return true;
  }

  for (let [id, guard] of guards1.entries()) {
    if (!(guard === guards2[id])) {
      return true;
    }
  }

  return false;
}

export default guardsChanged;

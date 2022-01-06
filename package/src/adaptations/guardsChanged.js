function guardsChanged(guards1, guards2) {
  if (!guards1 || !guards2) {
    return true;
  }

  if (guards1.length !== guards2.length) {
    return true;
  }

  let guardLength = guards1.length;
  for (let i = 0; i < guardLength; i++) {
    if (!(guards1[i] === guards2[i])) {
      return true;
    }
  }

  return false;
}

export default guardsChanged;

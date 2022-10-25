import { CleanupTree, Effect } from "./adaptEffect/effectTypes";

export default function setCleanupSet(effect: Effect) {
  //create variable to store `cleanupMap` of effect and initially set the variable to the cleanup tree
  let cleanupMap: CleanupTree = effect.cleanupTree;

  //extract the `cleanupMap` from the `cleanupTree` and set it to the `cleanupMap` variable
  effect.cleanupTreeNodePointer.forEach((part) => {
    if (!cleanupMap.get(part)) {
      cleanupMap.set(part, new Map());
    }
    cleanupMap = cleanupMap.get(part) as CleanupTree;
  });

  //set cleanup set for effect if it doesn't already exist in the cleanup map
  if (!cleanupMap.get(0)) {
    cleanupMap.set(0, new Set());
  }
}

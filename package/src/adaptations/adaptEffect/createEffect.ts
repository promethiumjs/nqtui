import executeFns from "./executeFns";
import sendSignal from "./sendSignal";
import setInitialParameters from "../setInitialParameters";
import setCleanupSet from "../setCleanupSet";
import { Getter } from "../adaptState/stateTypes";
import { Effect, EffectFn } from "./effectTypes";

export default function createEffect<T>(
  type: "async" | "sync" | "render",
  fn: EffectFn<T>,
  depArray?: Getter<any>[]
) {
  //determined if the effect is tracked by the state it uses implicitly, or using the
  //state provided by its dependency array
  const tracking = typeof depArray === "undefined" ? "implicit" : "depArray";
  const execute = executeFns[tracking];

  const effect: Effect = {
    //whether or not the effect hasn't been ran before
    firstRun: true,
    //whether the effect is async, sync or a render effect
    type,
    //how the effect is tracked (refer to the `tracking` variable above)
    tracking,
    //how many children the effect has
    childCount: 0,
    //the number "n" that shows that the effect is the "nth" child of its parent effect
    position: null,
    //how deeply nested the effect is (starting from level one)
    level: null,
    //tree-like map data structure that contains the cleanups for every effect in the effect tree
    cleanupTree: null,
    //array of digits that point to the effect's cleanup in the effect tree's cleanup tree
    cleanupTreeNodePointer: null,
    //subscription sets (async, sync, render, or memo) of every state currently tracking this effect
    observableSubscriptionSets: new Set(),
    //used to track the number of state values of states currently tracking the effect that are stale
    staleStateValuesCount: 0,
    //used to notify the effect when a state value of state currently tracking the effect turns
    //stale or freshens up after turning stale
    sendSignal: (signal: "fresh" | "stale"): void =>
      sendSignal(effect, execute, fn, depArray, signal),
  };

  setInitialParameters(effect);
  setCleanupSet(effect);

  return [execute, effect];
}

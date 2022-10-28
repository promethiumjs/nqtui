import effectAndDescendantCleanup from "./effectAndDescendantCeanup";
import observableSubscriptionsCleanup from "../observableSubscriptionsCleanup";
import getCleanupNode from "../getCleanupNode";
import { effectContexts } from "../effectContexts";
import { Effect, EffectFn, EffectOptions } from "./effectTypes";
import { Getter } from "../adaptState/stateTypes";

function implicitDependencyExecuteFn(effect: Effect, fn: EffectFn) {
  //set `childCount` back to zero to enable children effects to obtain correct positions upon recreation
  effect.childCount = 0;

  //fire cleanups make sure proceedings go smoothly
  const cleanupSet = getCleanupNode(effect).get(0) as Set<() => void>;
  cleanupSet.forEach((cleanup) => {
    cleanup();
  });
  cleanupSet.clear();

  //push effect onto context to enable tracking by state and memos
  effectContexts.push(effect);

  //call effect with previous return value
  const fnReturnValue = fn(effect.returnValue);
  //create `returnValueCleanup` to be called on next run of effect
  const returnValueCleanup = () => {
    if (typeof fnReturnValue === "function") {
      //extract new `returnValue` from effect's returned function
      effect.returnValue = fnReturnValue();
    }
  };

  //add cleanup to obtain new return value and remove effect from all old subscriptions
  cleanupSet
    .add(returnValueCleanup)
    .add(() => observableSubscriptionsCleanup(effect));

  //remove effect from context to disable tracking by state and memos
  effectContexts.pop();

  //return cleanup function for effect and its descendants
  return () => effectAndDescendantCleanup(effect);
}

function dependencyArrayExecuteFn(
  effect: Effect,
  fn: EffectFn,
  depArray: Getter[],
  options: EffectOptions = {}
) {
  //to enable children effects to obtain correct positions upon recreation
  effect.childCount = 0;

  //fire cleanups make sure proceedings go smoothly
  const cleanupSet = getCleanupNode(effect).get(0) as Set<() => void>;
  cleanupSet.forEach((cleanup) => {
    cleanup();
  });
  cleanupSet.clear();

  //push effect onto context to enable tracking by state and memos
  effectContexts.push(effect);

  //set tracking to "implicit" to enable tracking by state and memos in `depArray`
  effect.tracking = "implicit";
  const argsArray = depArray.map((state) => state());
  //set tracking back to "depArray" to disable other forms of implicit tracking
  //(only allow state and memos in `depArray` to track effect)
  effect.tracking = "depArray";

  //if effect is supposed to be deferred, do nothing on the first run
  if (effect.firstRun && options.defer) {
    effect.firstRun = false;
  } else {
    //call effect with previous return value and previous state values of tracking state and memos in an `argsArray`
    const fnReturnValue = fn(effect.returnValue, argsArray);
    //create `returnValueCleanup` to be called on next run of effect
    const returnValueCleanup = () => {
      if (typeof fnReturnValue === "function") {
        //extract new `returnValue` from effect's returned function
        effect.returnValue = fnReturnValue();
      }
    };

    //add cleanup to obtain new return value
    cleanupSet.add(returnValueCleanup);
  }

  //add cleanup to remove effect from all old subscriptions
  cleanupSet.add(() => observableSubscriptionsCleanup(effect));

  //remove effect from context to disable tracking by state and memos
  effectContexts.pop();

  //if effect is a component-wrapping effect, return cleanup function, function to `updateEffectDependencies` outside
  //normal flow, and `argsArray`
  //if not, return just the cleanup function
  const returnExp = options.isComponent
    ? ([
        () => effectAndDescendantCleanup(effect),
        () => updateEffectDependencies(effect, depArray),
        argsArray,
      ] as const)
    : () => effectAndDescendantCleanup(effect);

  return returnExp;
}

//created for the purpose of component-wrapping effects
function updateEffectDependencies(effect: Effect, depArray: Getter[]) {
  const cleanupSet = getCleanupNode(effect).get(0) as Set<() => void>;
  cleanupSet.forEach((cleanup) => {
    cleanup();
  });
  cleanupSet.clear();

  effectContexts.push(effect);

  effect.tracking = "implicit";
  const argsArray = depArray.map((state) => state());
  effect.tracking = "depArray";

  cleanupSet.add(() => observableSubscriptionsCleanup(effect));

  effectContexts.pop();

  return argsArray;
}

const executeFns = {
  implicit: implicitDependencyExecuteFn,
  depArray: dependencyArrayExecuteFn,
};

export default executeFns;

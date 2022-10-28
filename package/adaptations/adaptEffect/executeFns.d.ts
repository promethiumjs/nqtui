import { Effect, EffectFn, EffectOptions } from "./effectTypes";
import { Getter } from "../adaptState/stateTypes";
declare function implicitDependencyExecuteFn(effect: Effect, fn: EffectFn): () => void;
declare function dependencyArrayExecuteFn(effect: Effect, fn: EffectFn, depArray: Getter[], options?: EffectOptions): readonly [() => void, () => any[], any[]] | (() => void);
declare const executeFns: {
    implicit: typeof implicitDependencyExecuteFn;
    depArray: typeof dependencyArrayExecuteFn;
};
export default executeFns;
//# sourceMappingURL=executeFns.d.ts.map
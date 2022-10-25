import { EffectOptions } from "./effectTypes";
declare function implicitDependencyExecuteFn(effect: any, fn: any): () => void;
declare function dependencyArrayExecuteFn(effect: any, fn: any, depArray: any, options?: EffectOptions): any[] | (() => void);
declare const executeFns: {
    implicit: typeof implicitDependencyExecuteFn;
    depArray: typeof dependencyArrayExecuteFn;
};
export default executeFns;
//# sourceMappingURL=executeFns.d.ts.map
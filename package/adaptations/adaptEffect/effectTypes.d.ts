import { Getter } from "../adaptState/stateTypes";
export declare type CleanupTree = Map<number, CleanupTree | Set<() => void>>;
export declare type Effect = {
    firstRun: boolean;
    type: "async" | "sync" | "render" | "memo";
    tracking?: "implicit" | "depArray";
    childCount: number;
    position: number | null;
    level: number | null;
    cleanupTree: CleanupTree;
    cleanupTreeNodePointer: number[];
    observableSubscriptionSets: Set<Set<Effect>>;
    staleStateValuesCount: number;
    returnValue?: any;
    sendSignal: (signal: "stale" | "fresh") => void;
};
export declare type EffectOptions = {
    defer?: boolean;
    isComponent?: boolean;
};
export declare type EffectFn<R = any> = (returnValue?: R, argsArray?: any[]) => any | void;
export declare type ExecuteFn = ((effect: Effect, fn: EffectFn<any>) => () => void) | ((effect: Effect, fn: EffectFn<any>, depArray: Getter<any>[], options?: EffectOptions) => readonly [() => void, () => any[], any[]] | (() => void));
//# sourceMappingURL=effectTypes.d.ts.map
export type CleanupTree = Map<number, CleanupTree | Set<() => void>>;

export type Effect = {
  firstRun: boolean;
  type: "async" | "sync" | "render";
  tracking: "implicit" | "depArray";
  childCount: number;
  position: number | null;
  level: number | null;
  cleanupTree: CleanupTree;
  cleanupTreeNodePointer: number[];
  observableSubscriptionSets: Set<Set<Effect>>;
  staleStateValuesCount: number;
  sendSignal: (signal: "stale" | "fresh") => void;
};

export type EffectOptions = {
  defer?: boolean;
  isComponent?: boolean;
};

export type EffectFn<T = any> = (
  returnValue?: T,
  argsArray?: any[]
) => any | void;

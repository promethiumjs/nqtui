import { Getter } from "../adaptState/stateTypes";
import { Effect, EffectFn, EffectOptions } from "./effectTypes";
export default function sharedInternalFn(effect: Effect, fn: EffectFn, depArray: Getter[], options: EffectOptions, cleanupSet: Set<() => void>): void;
//# sourceMappingURL=sharedInternalFn.d.ts.map
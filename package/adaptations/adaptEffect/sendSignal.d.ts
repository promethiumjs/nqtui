import { Getter } from "../adaptState/stateTypes";
import { Effect, EffectFn, ExecuteFn } from "./effectTypes";
export default function sendSignal(effect: Effect, execute: ExecuteFn, fn: EffectFn, depArray: Getter[], signal: "stale" | "fresh"): void;
//# sourceMappingURL=sendSignal.d.ts.map
import { Getter } from "../adaptState/stateTypes";
import { Effect, EffectFn } from "./effectTypes";
export default function createEffect<T>(type: "async" | "sync" | "render", fn: EffectFn<T>, depArray?: Getter<any>[]): readonly [((effect: Effect, fn: EffectFn<any>) => () => void) | ((effect: Effect, fn: EffectFn<any>, depArray: Getter<any>[], options?: import("./effectTypes").EffectOptions) => readonly [() => void, () => any[], any[]] | (() => void)), Effect];
//# sourceMappingURL=createEffect.d.ts.map
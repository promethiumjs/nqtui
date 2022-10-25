import { Getter } from "../adaptState/stateTypes";
import { Effect, EffectFn } from "./effectTypes";
export default function createEffect<T>(type: "async" | "sync" | "render", fn: EffectFn<T>, depArray?: Getter<any>[]): (Effect | ((effect: any, fn: any, depArray: any, options?: import("./effectTypes").EffectOptions) => any[] | (() => void)))[];
//# sourceMappingURL=createEffect.d.ts.map
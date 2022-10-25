import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";
export declare function adaptRenderEffect<T>(fn: EffectFn<T>): void;
export declare function adaptRenderEffect<T>(fn: EffectFn<T>, depArray: Getter<any>[], options?: EffectOptions): void;
export default function adaptRenderEffect<T>(fn: EffectFn<T>, depArray?: Getter<any>[], options?: EffectOptions): void;
//# sourceMappingURL=adaptRenderEffect.d.ts.map
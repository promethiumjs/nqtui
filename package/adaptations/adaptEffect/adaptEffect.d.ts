import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";
export declare function adaptEffect<T>(fn: EffectFn<T>): void;
export declare function adaptEffect<T>(fn: EffectFn<T>, depArray: Getter<any>[], options?: EffectOptions): void;
export default function adaptEffect<T>(fn: EffectFn<T>, depArray?: Getter<any>[], options?: EffectOptions): void;
//# sourceMappingURL=adaptEffect.d.ts.map
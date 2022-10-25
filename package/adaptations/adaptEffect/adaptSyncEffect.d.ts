import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";
export declare function adaptSyncEffect<T>(fn: EffectFn<T>): void;
export declare function adaptSyncEffect<T>(fn: EffectFn<T>, depArray: Getter<any>[], options?: EffectOptions): void;
export default function adaptSyncEffect<T>(fn: EffectFn<T>, depArray?: Getter<any>[], options?: EffectOptions): any;
//# sourceMappingURL=adaptSyncEffect.d.ts.map
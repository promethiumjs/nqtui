import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";
export default function adaptEffect<T = any>(fn: EffectFn<T>, depArray?: Getter<any>[], options?: EffectOptions): void;
//# sourceMappingURL=adaptEffect.d.ts.map
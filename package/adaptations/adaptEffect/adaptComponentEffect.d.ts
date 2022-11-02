import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";
export default function adaptComponentFnEffect<T = any>(fn: EffectFn<T>, depArray?: Getter<any>[], options?: EffectOptions): () => void;
//# sourceMappingURL=adaptComponentEffect.d.ts.map
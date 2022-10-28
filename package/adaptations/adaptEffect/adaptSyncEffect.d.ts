import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";
export default function adaptSyncEffect<T>(fn: EffectFn<T>, depArray?: Getter<any>[], options?: EffectOptions): (() => void) | readonly [() => void, () => any[], any[]];
//# sourceMappingURL=adaptSyncEffect.d.ts.map
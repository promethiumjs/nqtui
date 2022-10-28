import { Getter } from "../adaptState/stateTypes";
import createEffect from "./createEffect";
import { EffectFn, EffectOptions } from "./effectTypes";

export default function adaptSyncEffect<T>(
  fn: EffectFn<T>,
  depArray?: Getter<any>[],
  options?: EffectOptions
) {
  const [execute, effect] = createEffect("sync", fn, depArray);

  //sync effects are able to return cleanup functions due to their synchronous nature
  return execute(effect, fn, depArray, options);
}

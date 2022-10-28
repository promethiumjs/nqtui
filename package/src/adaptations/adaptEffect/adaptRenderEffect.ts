import createEffect from "./createEffect";
import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";

export default function adaptRenderEffect<T>(
  fn: EffectFn<T>,
  depArray?: Getter<any>[],
  options?: EffectOptions
) {
  const [execute, effect] = createEffect("render", fn, depArray);

  //execute effect asynchronously before next screen paint
  queueMicrotask(() => execute(effect, fn, depArray, options));
}

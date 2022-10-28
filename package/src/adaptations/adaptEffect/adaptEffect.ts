import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";
import createEffect from "./createEffect";

export default function adaptEffect<T = any>(
  fn: EffectFn<T>,
  depArray?: Getter<any>[],
  options?: EffectOptions
) {
  const [execute, effect] = createEffect("async", fn, depArray);

  //execute effect asynchronously after next screen paint
  setTimeout(() => execute(effect, fn, depArray, options));
}

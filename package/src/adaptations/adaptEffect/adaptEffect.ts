import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";
import createEffect from "./createEffect";

export function adaptEffect<T>(fn: EffectFn<T>): void;

export function adaptEffect<T>(
  fn: EffectFn<T>,
  depArray: Getter<any>[],
  options?: EffectOptions
): void;

export default function adaptEffect<T>(
  fn: EffectFn<T>,
  depArray?: Getter<any>[],
  options?: EffectOptions
) {
  const [execute, effect] = createEffect("async", fn, depArray);

  //execute effect asynchronously before next screen paint
  setTimeout(() => execute(effect, fn, depArray, options));
}

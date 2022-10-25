import createEffect from "./createEffect";
import { Getter } from "../adaptState/stateTypes";
import { EffectFn, EffectOptions } from "./effectTypes";

export function adaptRenderEffect<T>(fn: EffectFn<T>): void;

export function adaptRenderEffect<T>(
  fn: EffectFn<T>,
  depArray: Getter<any>[],
  options?: EffectOptions
): void;

export default function adaptRenderEffect<T>(
  fn: EffectFn<T>,
  depArray?: Getter<any>[],
  options?: EffectOptions
) {
  const [execute, effect] = createEffect("render", fn, depArray);

  //execute effect asynchronously after next screen paint
  queueMicrotask(() => execute(effect, fn, depArray, options));
}

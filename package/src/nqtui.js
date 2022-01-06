import Component from "./Component.js";
import $ from "./$.js";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { guard } from "lit-html/directives/guard.js";
import { cache } from "lit-html/directives/cache.js";
import { repeat } from "lit-html/directives/repeat.js";
import { live } from "lit-html/directives/live.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { ref } from "lit-html/directives/ref.js";
import { createRef } from "lit-html/directives/ref.js";
import { until } from "lit-html/directives/until.js";
import { asyncAppend } from "lit-html/directives/async-append.js";
import { asyncReplace } from "lit-html/directives/async-replace.js";
import {
  adaptStore,
  releaseCurrentStore,
  detonateStore,
} from "./adaptations/adaptations.js";
import adaptation from "./adaptations/adaptation.js";
import adaptState from "./adaptations/adaptState.js";
import adaptGetState from "./adaptations/adaptGetState.js";
import adaptRef from "./adaptations/adaptRef.js";
import adaptEffect from "./adaptations/adaptEffect.js";
import adaptInstantEffect from "./adaptations/adaptInstantEffect.js";
import adaptInvocationEffect from "./adaptations/adaptInvocationEffect.js";
import adaptMemo from "./adaptations/adaptMemo.js";
import adaptCallback from "./adaptations/adaptCallback.js";
import adaptFunction from "./adaptations/adaptFunction.js";

export default Component;
export {
  $,
  html,
  classMap,
  styleMap,
  guard,
  cache,
  repeat,
  live,
  ifDefined,
  ref,
  createRef,
  until,
  asyncAppend,
  asyncReplace,
  adaptStore as adapt,
  releaseCurrentStore as release,
  detonateStore as detonate,
  adaptation,
  adaptState,
  adaptGetState,
  adaptRef,
  adaptEffect,
  adaptInstantEffect,
  adaptInvocationEffect,
  adaptMemo,
  adaptCallback,
  adaptFunction,
};

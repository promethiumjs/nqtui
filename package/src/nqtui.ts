import Component from "./Component.js";
import h from "./h.js";
import { html } from "lit-html";
import adaptState from "./adaptations/new-api/adaptState/adaptState.js";
import adaptEffect from "./adaptations/new-api/adaptEffect/adaptEffect.js";
import adaptRenderEffect from "./adaptations/new-api/adaptEffect/adaptRenderEffect.js";
import adaptSyncEffect from "./adaptations/new-api/adaptEffect/adaptSyncEffect.js";
import adaptMemo from "./adaptations/new-api/adaptMemo/adaptMemo.js";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";
import { when } from "lit-html/directives/when.js";
import { choose } from "lit-html/directives/choose.js";
import { map } from "lit-html/directives/map.js";
import { repeat } from "lit-html/directives/repeat.js";
import { join } from "lit-html/directives/join.js";
import { range } from "lit-html/directives/range.js";
import { ifDefined } from "lit-html/directives/if-defined.js";
import { cache } from "lit-html/directives/cache.js";
import { keyed } from "lit-html/directives/keyed.js";
import { guard } from "lit-html/directives/guard.js";
import { live } from "lit-html/directives/live.js";
import { ref } from "lit-html/directives/ref.js";
import { createRef } from "lit-html/directives/ref.js";
import { templateContent } from "lit-html/directives/template-content.js";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";
import { unsafeSVG } from "lit-html/directives/unsafe-svg.js";
import { until } from "lit-html/directives/until.js";
import { asyncAppend } from "lit-html/directives/async-append.js";
import { asyncReplace } from "lit-html/directives/async-replace.js";

export default Component;
export {
  h,
  html,
  adaptState,
  adaptEffect,
  adaptRenderEffect,
  adaptSyncEffect,
  adaptMemo,
  classMap,
  styleMap,
  when,
  choose,
  guard,
  cache,
  keyed,
  map,
  repeat,
  join,
  range,
  live,
  ifDefined,
  ref,
  createRef,
  templateContent,
  unsafeHTML,
  unsafeSVG,
  until,
  asyncAppend,
  asyncReplace,
};

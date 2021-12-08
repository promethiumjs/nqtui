import{html as $e6d95b80e07e2d2a$re_export$html,render as $c1Qrr$render}from"lit-html";import{classMap as $e6d95b80e07e2d2a$re_export$classMap}from"lit-html/directives/class-map.js";import{styleMap as $e6d95b80e07e2d2a$re_export$styleMap}from"lit-html/directives/style-map.js";import{guard as $e6d95b80e07e2d2a$re_export$guard}from"lit-html/directives/guard.js";import{cache as $e6d95b80e07e2d2a$re_export$cache}from"lit-html/directives/cache.js";import{repeat as $e6d95b80e07e2d2a$re_export$repeat}from"lit-html/directives/repeat.js";import{live as $e6d95b80e07e2d2a$re_export$live}from"lit-html/directives/live.js";import{ifDefined as $e6d95b80e07e2d2a$re_export$ifDefined}from"lit-html/directives/if-defined.js";import{ref as $e6d95b80e07e2d2a$re_export$ref}from"lit-html/directives/ref.js";import{until as $e6d95b80e07e2d2a$re_export$until}from"lit-html/directives/until.js";import{AsyncDirective as $c1Qrr$AsyncDirective,directive as $c1Qrr$directive}from"lit-html/async-directive.js";let $15882dbcd04d9f27$var$currentStore;const $15882dbcd04d9f27$var$stores=new WeakMap;function $15882dbcd04d9f27$export$8952e4d023034a8d(e){if(!$15882dbcd04d9f27$var$stores.has(e)){const t={currentAdaptationIds:{}};$15882dbcd04d9f27$var$stores.set(e,t)}$15882dbcd04d9f27$var$currentStore=$15882dbcd04d9f27$var$stores.get(e),Object.keys($15882dbcd04d9f27$var$currentStore.currentAdaptationIds).forEach((e=>$15882dbcd04d9f27$var$currentStore.currentAdaptationIds[e]=0))}function $15882dbcd04d9f27$export$9d75f3e1a7e94aee(){return $15882dbcd04d9f27$var$currentStore}function $15882dbcd04d9f27$export$6fec604aa7293d0c(e){return $15882dbcd04d9f27$var$stores.get(e)}function $15882dbcd04d9f27$export$386be634f17bdf08(){$15882dbcd04d9f27$var$currentStore=null}function $15882dbcd04d9f27$export$ddf93ecef02cd077(e){const t=$15882dbcd04d9f27$export$6fec604aa7293d0c(e);t.beforeCleanups&&t.beforeCleanups.forEach((e=>"function"==typeof e&&e())),t.afterCleanups&&t.afterCleanups.forEach((e=>"function"==typeof e&&e())),$15882dbcd04d9f27$var$stores.delete(e)}function $98ed1c2b27fd185d$var$guardsChanged(e,t){if(!e||!t)return!0;if(e.length!==t.length)return!0;let a=e.length;for(let r=0;r<a;r++)if(e[r]!==t[r])return!0;return!1}var $98ed1c2b27fd185d$export$2e2bcd8739ae039=$98ed1c2b27fd185d$var$guardsChanged;function $0d6af4b0461a5088$export$d37ff70272dc6b7e(e,t,a){const r=$15882dbcd04d9f27$export$9d75f3e1a7e94aee();a?$0d6af4b0461a5088$var$beforeRenderEffectAdaptation(r,e,t):$0d6af4b0461a5088$var$afterRenderEffectAdaptation(r,e,t)}function $0d6af4b0461a5088$var$afterRenderEffectAdaptation(e,t,a){if(e&&!e.afterEffects&&(e.afterEffects=[],e.currentAdaptationIds.afterEffect=0),!e)throw new Error("adaptEffect() can only be used inside a Component or a Custom Adaptation.");{e.currentAdaptationIds.afterEffect in e.afterEffects||(e.afterEffects[e.currentAdaptationIds.afterEffect]=[]);let r=e.currentAdaptationIds.afterEffect,d=e.afterEffects[r];$98ed1c2b27fd185d$export$2e2bcd8739ae039(d[1],a)&&(d[0]=()=>{e.afterCleanups&&"function"==typeof e.afterCleanups[r]&&(e.afterCleanups[r](),e.afterCleanups[r]=void 0),e.afterCleanups||(e.afterCleanups=[]),e.afterCleanups[r]=t()},$0d6af4b0461a5088$var$effectAndCleanupArray.push(d[0]),d[0]=null,d[1]=a),e.currentAdaptationIds.afterEffect++}}function $0d6af4b0461a5088$var$beforeRenderEffectAdaptation(e,t,a){if(e&&!e.beforeEffects&&(e.beforeEffects=[],e.currentAdaptationIds.beforeEffect=0),!e)throw new Error("adaptEffect() can only be used inside a Component or a Custom Adaptation.");{e.currentAdaptationIds.beforeEffect in e.beforeEffects||(e.beforeEffects[e.currentAdaptationIds.beforeEffect]=[]);let r=e.currentAdaptationIds.beforeEffect,d=e.beforeEffects[r];$98ed1c2b27fd185d$export$2e2bcd8739ae039(d[1],a)&&(d[0]=()=>{e.beforeCleanups&&"function"==typeof e.beforeCleanups[r]&&(e.beforeCleanups[r](),e.beforeCleanups[r]=void 0),e.beforeCleanups||(e.beforeCleanups=[]),e.beforeCleanups[r]=t()},d[0](),d[0]=null,d[1]=a),e.currentAdaptationIds.beforeEffect++}}const $0d6af4b0461a5088$var$effectAndCleanupArray=[];function $0d6af4b0461a5088$export$106f55a9d111655d(){const e=[...$0d6af4b0461a5088$var$effectAndCleanupArray];$0d6af4b0461a5088$var$effectAndCleanupArray.length=0,e.forEach((e=>e()))}let $f42e5033b6ddf80e$var$storeId=null;function $f42e5033b6ddf80e$export$36d4dfac5e87b784(){$f42e5033b6ddf80e$var$storeId={}}let $f42e5033b6ddf80e$var$renderFunction=null;function $f42e5033b6ddf80e$export$2469ce1cca5fd1ba(e){$f42e5033b6ddf80e$var$renderFunction=e,$f42e5033b6ddf80e$export$36d4dfac5e87b784()}function $f42e5033b6ddf80e$export$1aa0accf58dd55e1(){$15882dbcd04d9f27$export$8952e4d023034a8d($f42e5033b6ddf80e$var$storeId),$f42e5033b6ddf80e$var$renderFunction(),$15882dbcd04d9f27$export$386be634f17bdf08(),$0d6af4b0461a5088$export$106f55a9d111655d()}class $cb3597414830fe60$export$2e2bcd8739ae039{constructor(e){this.props=e||{}}static createFromObject(e){return class extends $cb3597414830fe60$export$2e2bcd8739ae039{constructor(t){super(t),Object.keys(e).forEach((t=>{this[t]=e[t]}))}}}static createClassComponentRoot(e){return("string"==typeof e.props.renderContainer||e.props.renderContainer instanceof String)&&(e.props.renderContainer=document.querySelector(e.props.renderContainer)),$f42e5033b6ddf80e$export$2469ce1cca5fd1ba(e.render.bind(e,e.props.renderContainer,e.props.renderOptions)),$f42e5033b6ddf80e$export$1aa0accf58dd55e1(),e}static createFunctionalComponentRoot(e,t){("string"==typeof t.renderContainer||t.renderContainer instanceof String)&&(t.renderContainer=document.querySelector(t.renderContainer));return $f42e5033b6ddf80e$export$2469ce1cca5fd1ba((()=>{$c1Qrr$render(e(t),t.renderContainer,t.renderOptions)})),$f42e5033b6ddf80e$export$1aa0accf58dd55e1(),e}static createRootFromObject(e,t){let a=Object.assign(new $cb3597414830fe60$export$2e2bcd8739ae039(t),e);return $cb3597414830fe60$export$2e2bcd8739ae039.createClassComponentRoot(a)}static createRoot(e,t){if(e.prototype&&e.prototype.isClassComponent){let a=new e(t);return $cb3597414830fe60$export$2e2bcd8739ae039.createClassComponentRoot(a)}{let a=e;return $cb3597414830fe60$export$2e2bcd8739ae039.createFunctionalComponentRoot(a,t)}}addProps(e){return Object.assign(this.props,e),this}render(e,t){t?$c1Qrr$render(this.construct(),e,t):$c1Qrr$render(this.construct(),e)}}$cb3597414830fe60$export$2e2bcd8739ae039.prototype.isClassComponent=!0;class $26569a28d0da7810$var$$$ extends $c1Qrr$AsyncDirective{constructor(e){super(e),this.initialization=!0}initializeComponent(e,t){e.prototype&&e.prototype.isClassComponent&&(this.Component=new e(t)),this.Component&&this.Component.initialized&&this.Component.initialized(),this.initialization=!1,this.createStoreId()}createStoreId(){this.storeId={}}reconnected(){this.initialization=!0}disconnected(){$15882dbcd04d9f27$export$ddf93ecef02cd077(this.storeId)}update(e,[t,a]){return this.initialization&&this.initializeComponent(t,a),this.render(t,a,e.parentNode)}render(e,t,a){return this.Component&&(this.Component.addProps(t),this.Component.parent=a),$15882dbcd04d9f27$export$8952e4d023034a8d(this.storeId),this.Component?this.Component.construct({parent:a,...t}):e({parent:a,...t})}}const $26569a28d0da7810$var$$=$c1Qrr$directive($26569a28d0da7810$var$$$);var $26569a28d0da7810$export$2e2bcd8739ae039=$26569a28d0da7810$var$$;function $ec7425f6b72a06da$var$adaptState(e){const t=$15882dbcd04d9f27$export$9d75f3e1a7e94aee();if(t&&!t.states&&(t.states=[],t.currentAdaptationIds.state=0),t){if(!(t.currentAdaptationIds.state in t.states)){let a=["function"==typeof e?e():e,(e,t)=>{a[0]="function"==typeof e?e(a[0]):e,t?t.forEach((e=>{e.fn?"function"==typeof e.fn?e.fn(...e.args):"render"===e.fn&&$f42e5033b6ddf80e$export$1aa0accf58dd55e1():"function"==typeof e?e():"render"===e&&$f42e5033b6ddf80e$export$1aa0accf58dd55e1()})):$f42e5033b6ddf80e$export$1aa0accf58dd55e1()}];t.states[t.currentAdaptationIds.state]=a}return t.states[t.currentAdaptationIds.state++]}throw new Error("adaptState() can only be used inside a Component or a Custom Adaptation.")}var $ec7425f6b72a06da$export$2e2bcd8739ae039=$ec7425f6b72a06da$var$adaptState;function $06d6a5c9deab7415$var$adaptUnifiedState(e){const t=$15882dbcd04d9f27$export$9d75f3e1a7e94aee();if(t&&!t.states&&(t.states=[],t.currentAdaptationIds.state=0),t){if(!(t.currentAdaptationIds.state in t.states)){let a=[e,(e,t)=>{Object.assign(a[0],e),t?t.forEach((e=>{e.fn?"function"==typeof e.fn?e.fn(...e.args):"render"===e.fn&&$f42e5033b6ddf80e$export$1aa0accf58dd55e1():"function"==typeof e?e():"render"===e&&$f42e5033b6ddf80e$export$1aa0accf58dd55e1()})):$f42e5033b6ddf80e$export$1aa0accf58dd55e1()}];t.states[t.currentAdaptationIds.state]=a}return t.states[t.currentAdaptationIds.state++]}throw new Error("adaptUnifiedState() can only be used inside a Component or a Custom Adaptation.")}var $06d6a5c9deab7415$export$2e2bcd8739ae039=$06d6a5c9deab7415$var$adaptUnifiedState;function $ce48106bca548d75$var$adaptRef(e){const t=$15882dbcd04d9f27$export$9d75f3e1a7e94aee();if(t&&!t.refs&&(t.refs=[],t.currentAdaptationIds.ref=0),t){if(!(t.currentAdaptationIds.ref in t.refs)){let a=e;t.refs[t.currentAdaptationIds.ref]=a}return t.refs[t.currentAdaptationIds.ref++]}throw new Error("adaptRef() can only be used inside a Component or a Custom Adaptation.")}var $ce48106bca548d75$export$2e2bcd8739ae039=$ce48106bca548d75$var$adaptRef;function $ae8e82890f0d4c9a$var$adaptMemo(e,t){const a=$15882dbcd04d9f27$export$9d75f3e1a7e94aee();if(a&&!a.memos&&(a.memos=[],a.currentAdaptationIds.memo=0),t||(t=[e]),a){a.currentAdaptationIds.memo in a.memos||(a.memos[a.currentAdaptationIds.memo]=[]);let r=a.memos[a.currentAdaptationIds.memo];return $98ed1c2b27fd185d$export$2e2bcd8739ae039(r[1],t)&&(r[0]=e(),r[1]=t),a.currentAdaptationIds.memo++,r[0]}throw new Error("adaptMemo() can only be used inside a Component or a Custom Adaptation.")}var $ae8e82890f0d4c9a$export$2e2bcd8739ae039=$ae8e82890f0d4c9a$var$adaptMemo;function $f70cb2dda874a3b5$var$adaptCallback(e,t){if($15882dbcd04d9f27$export$9d75f3e1a7e94aee())return $ae8e82890f0d4c9a$export$2e2bcd8739ae039((()=>e),t);throw new Error("adaptCallback() can only be used inside a Component or a Custom Adaptation.")}var $f70cb2dda874a3b5$export$2e2bcd8739ae039=$f70cb2dda874a3b5$var$adaptCallback;function $225fb0f66a4ed59f$var$adaptEvents(e){return()=>$225fb0f66a4ed59f$var$emitEvents(e)}function $225fb0f66a4ed59f$var$emitEvents(e){e?e.forEach((e=>{e.fn?"function"==typeof e.fn?e.fn(...e.args):"render"===e.fn&&$f42e5033b6ddf80e$export$1aa0accf58dd55e1():"function"==typeof e?e():"render"===e&&$f42e5033b6ddf80e$export$1aa0accf58dd55e1()})):$f42e5033b6ddf80e$export$1aa0accf58dd55e1()}var $225fb0f66a4ed59f$export$2e2bcd8739ae039=$225fb0f66a4ed59f$var$adaptEvents;export{$cb3597414830fe60$export$2e2bcd8739ae039 as Component,$26569a28d0da7810$export$2e2bcd8739ae039 as $,$e6d95b80e07e2d2a$re_export$html as html,$e6d95b80e07e2d2a$re_export$classMap as classMap,$e6d95b80e07e2d2a$re_export$styleMap as styleMap,$e6d95b80e07e2d2a$re_export$guard as guard,$e6d95b80e07e2d2a$re_export$cache as cache,$e6d95b80e07e2d2a$re_export$repeat as repeat,$e6d95b80e07e2d2a$re_export$live as live,$e6d95b80e07e2d2a$re_export$ifDefined as ifDefined,$e6d95b80e07e2d2a$re_export$ref as ref,$e6d95b80e07e2d2a$re_export$until as until,$ec7425f6b72a06da$export$2e2bcd8739ae039 as adaptState,$06d6a5c9deab7415$export$2e2bcd8739ae039 as adaptUnifiedState,$ce48106bca548d75$export$2e2bcd8739ae039 as adaptRef,$0d6af4b0461a5088$export$d37ff70272dc6b7e as adaptEffect,$ae8e82890f0d4c9a$export$2e2bcd8739ae039 as adaptMemo,$f70cb2dda874a3b5$export$2e2bcd8739ae039 as adaptCallback,$225fb0f66a4ed59f$export$2e2bcd8739ae039 as adaptEvents};
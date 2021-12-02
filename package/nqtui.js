import {html as $e6d95b80e07e2d2a$re_export$html, render as $c1Qrr$render} from "lit-html";
import {classMap as $e6d95b80e07e2d2a$re_export$classMap} from "lit-html/directives/class-map.js";
import {styleMap as $e6d95b80e07e2d2a$re_export$styleMap} from "lit-html/directives/style-map.js";
import {guard as $e6d95b80e07e2d2a$re_export$guard} from "lit-html/directives/guard.js";
import {cache as $e6d95b80e07e2d2a$re_export$cache} from "lit-html/directives/cache.js";
import {repeat as $e6d95b80e07e2d2a$re_export$repeat} from "lit-html/directives/repeat.js";
import {live as $e6d95b80e07e2d2a$re_export$live} from "lit-html/directives/live.js";
import {ifDefined as $e6d95b80e07e2d2a$re_export$ifDefined} from "lit-html/directives/if-defined.js";
import {ref as $e6d95b80e07e2d2a$re_export$ref} from "lit-html/directives/ref.js";
import {until as $e6d95b80e07e2d2a$re_export$until} from "lit-html/directives/until.js";
import {AsyncDirective as $c1Qrr$AsyncDirective, directive as $c1Qrr$directive} from "lit-html/async-directive.js";


let $15882dbcd04d9f27$var$currentStore;
const $15882dbcd04d9f27$var$stores = new WeakMap();
function $15882dbcd04d9f27$export$8952e4d023034a8d(storeId) {
    if (!$15882dbcd04d9f27$var$stores.has(storeId)) {
        const store = {
            currentAdaptationIds: {
            }
        };
        $15882dbcd04d9f27$var$stores.set(storeId, store);
    }
    $15882dbcd04d9f27$var$currentStore = $15882dbcd04d9f27$var$stores.get(storeId);
    Object.keys($15882dbcd04d9f27$var$currentStore.currentAdaptationIds).forEach((id)=>$15882dbcd04d9f27$var$currentStore.currentAdaptationIds[id] = 0
    );
}
function $15882dbcd04d9f27$export$9d75f3e1a7e94aee() {
    return $15882dbcd04d9f27$var$currentStore;
}
function $15882dbcd04d9f27$export$6fec604aa7293d0c(storeId) {
    return $15882dbcd04d9f27$var$stores.get(storeId);
}
function $15882dbcd04d9f27$export$386be634f17bdf08() {
    $15882dbcd04d9f27$var$currentStore = null;
}
function $15882dbcd04d9f27$export$ddf93ecef02cd077(storeId) {
    const currentStore = $15882dbcd04d9f27$export$6fec604aa7293d0c(storeId);
    try {
        if (currentStore.cleanups) {
            for (let cleanup of currentStore.cleanups)if (typeof cleanup == "function") cleanup();
        }
    } finally{
        $15882dbcd04d9f27$var$stores.delete(storeId);
    }
}



function $98ed1c2b27fd185d$var$guardsChanged(guards1, guards2) {
    if (guards1 === undefined || guards2 === undefined) return true;
    if (guards1.length !== guards2.length) return true;
    for (let [id, guard] of guards1.entries()){
        if (!(guard === guards2[id])) return true;
    }
    return false;
}
var $98ed1c2b27fd185d$export$2e2bcd8739ae039 = $98ed1c2b27fd185d$var$guardsChanged;


function $0d6af4b0461a5088$export$d37ff70272dc6b7e(fn, guards) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.effects) {
        currentStore.effects = [];
        currentStore.currentAdaptationIds.effect = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.effect in currentStore.effects)) currentStore.effects[currentStore.currentAdaptationIds.effect] = [];
        let effectId = currentStore.currentAdaptationIds.effect;
        let effect = currentStore.effects[effectId];
        if ($98ed1c2b27fd185d$export$2e2bcd8739ae039(effect[1], guards)) {
            effect[0] = ()=>{
                if (currentStore.cleanups) {
                    if (typeof currentStore.cleanups[effectId] == "function") try {
                        currentStore.cleanups[effectId]();
                    } finally{
                        currentStore.cleanups[effectId] = undefined;
                    }
                }
                const cleanUp = fn();
                if (typeof cleanUp == "function") {
                    if (!currentStore.cleanups) currentStore.cleanups = [];
                    currentStore.cleanups[effectId] = cleanUp;
                }
            };
            effect[1] = guards;
        }
        currentStore.currentAdaptationIds.effect++;
    } else throw new Error("adaptEffect() can only be used inside a Component or a Custom Adaptation.");
}
function $0d6af4b0461a5088$export$3217ea34d49aa1cd(storeId) {
    const store = $15882dbcd04d9f27$export$6fec604aa7293d0c(storeId);
    if (store.effects) {
        for (let [id, [effect, guards]] of store.effects.entries())try {
            if (typeof effect == "function") effect();
        } finally{
            store.effects[id][0] = undefined;
        }
    }
}


let $f42e5033b6ddf80e$var$storeId = null;
function $f42e5033b6ddf80e$export$36d4dfac5e87b784() {
    $f42e5033b6ddf80e$var$storeId = {
    };
}
let $f42e5033b6ddf80e$var$renderFunction = null;
function $f42e5033b6ddf80e$export$2469ce1cca5fd1ba(newRenderFunction) {
    $f42e5033b6ddf80e$var$renderFunction = newRenderFunction;
    $f42e5033b6ddf80e$export$36d4dfac5e87b784();
}
function $f42e5033b6ddf80e$export$1aa0accf58dd55e1() {
    $15882dbcd04d9f27$export$8952e4d023034a8d($f42e5033b6ddf80e$var$storeId);
    try {
        $f42e5033b6ddf80e$var$renderFunction();
        $15882dbcd04d9f27$export$386be634f17bdf08();
    } finally{
        $0d6af4b0461a5088$export$3217ea34d49aa1cd($f42e5033b6ddf80e$var$storeId);
    }
}


class $cb3597414830fe60$export$2e2bcd8739ae039 {
    constructor(props){
        this.props = props || {
        };
    }
    static createFromObject(object) {
        class NewClassComponent extends $cb3597414830fe60$export$2e2bcd8739ae039 {
            constructor(props){
                super(props);
                let objectKeys = Object.keys(object);
                objectKeys.forEach((objectKey)=>{
                    this[objectKey] = object[objectKey];
                });
            }
        }
        return NewClassComponent;
    }
    static createClassComponentRoot(component) {
        if (typeof component.props.renderContainer === "string" || component.props.renderContainer instanceof String) component.props.renderContainer = document.querySelector(component.props.renderContainer);
        let renderFunction = component.render.bind(component, component.props.renderContainer, component.props.renderOptions);
        $f42e5033b6ddf80e$export$2469ce1cca5fd1ba(renderFunction);
        $f42e5033b6ddf80e$export$1aa0accf58dd55e1();
        return component;
    }
    static createFunctionalComponentRoot(component, props) {
        if (typeof props.renderContainer === "string" || props.renderContainer instanceof String) props.renderContainer = document.querySelector(props.renderContainer);
        let renderFunction = ()=>{
            $c1Qrr$render(component(props), props.renderContainer, props.renderOptions);
        };
        $f42e5033b6ddf80e$export$2469ce1cca5fd1ba(renderFunction);
        $f42e5033b6ddf80e$export$1aa0accf58dd55e1();
        return component;
    }
    static createRootFromObject(object, props) {
        let component = Object.assign(new $cb3597414830fe60$export$2e2bcd8739ae039(props), object);
        return $cb3597414830fe60$export$2e2bcd8739ae039.createClassComponentRoot(component);
    }
    static createRoot(ComponentType, props) {
        if (ComponentType.prototype && ComponentType.prototype.isClassComponent) {
            let component = new ComponentType(props);
            return $cb3597414830fe60$export$2e2bcd8739ae039.createClassComponentRoot(component);
        } else {
            let component = ComponentType;
            return $cb3597414830fe60$export$2e2bcd8739ae039.createFunctionalComponentRoot(component, props);
        }
    }
    addProps(props) {
        Object.assign(this.props, props);
        return this;
    }
    render(container, renderOptions) {
        if (renderOptions) $c1Qrr$render(this.construct(), container, renderOptions);
        else $c1Qrr$render(this.construct(), container);
    }
}
$cb3597414830fe60$export$2e2bcd8739ae039.prototype.isClassComponent = true;





class $26569a28d0da7810$var$$$ extends $c1Qrr$AsyncDirective {
    constructor(root){
        super(root);
        this.initialization = true;
    }
    initializeComponent(Component, props) {
        if (Component.prototype && Component.prototype.isClassComponent) this.Component = new Component(props);
        if (this.Component && this.Component.initialized) this.Component.initialized();
        this.initialization = false;
        this.createStoreId();
    }
    createStoreId() {
        this.storeId = {
        };
    }
    reconnected() {
        this.initialization = true;
    }
    disconnected() {
        $15882dbcd04d9f27$export$ddf93ecef02cd077(this.storeId);
    }
    update(parent, [Component, props]) {
        if (this.initialization) this.initializeComponent(Component, props);
        return this.render(Component, props, parent.parentNode);
    }
    render(Component, props, parent) {
        if (this.Component) {
            this.Component.addProps(props);
            this.Component.parent = parent;
        }
        $15882dbcd04d9f27$export$8952e4d023034a8d(this.storeId);
        try {
            return this.Component ? this.Component.construct({
                parent: parent,
                ...props
            }) : Component({
                parent: parent,
                ...props
            });
        } finally{
            $0d6af4b0461a5088$export$3217ea34d49aa1cd(this.storeId);
        }
    }
}
const $26569a28d0da7810$var$$ = $c1Qrr$directive($26569a28d0da7810$var$$$);
var $26569a28d0da7810$export$2e2bcd8739ae039 = $26569a28d0da7810$var$$;














function $ec7425f6b72a06da$var$adaptState(initialStateValue) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.states) {
        currentStore.states = [];
        currentStore.currentAdaptationIds.state = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.state in currentStore.states)) {
            let stateValue = typeof initialStateValue == "function" ? initialStateValue() : initialStateValue;
            let setStateFunction = (newStateValue, effectArray)=>{
                state[0] = typeof newStateValue == "function" ? newStateValue(state[0]) : newStateValue;
                if (effectArray) effectArray.forEach((effect)=>{
                    typeof effect == "function" ? effect() : effect == "render" && $f42e5033b6ddf80e$export$1aa0accf58dd55e1();
                });
                else $f42e5033b6ddf80e$export$1aa0accf58dd55e1();
            };
            let state = [
                stateValue,
                setStateFunction
            ];
            currentStore.states[currentStore.currentAdaptationIds.state] = state;
        }
        return currentStore.states[currentStore.currentAdaptationIds.state++];
    } else throw new Error("adaptState() can only be used inside a Component or a Custom Adaptation.");
}
var $ec7425f6b72a06da$export$2e2bcd8739ae039 = $ec7425f6b72a06da$var$adaptState;




function $06d6a5c9deab7415$var$adaptUnifiedState(initialStateValue) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.states) {
        currentStore.states = [];
        currentStore.currentAdaptationIds.state = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.state in currentStore.states)) {
            let stateValue = initialStateValue;
            let setStateFunction = (newStateValue, effectArray)=>{
                Object.assign(state[0], newStateValue);
                if (effectArray) effectArray.forEach((effect)=>{
                    typeof effect == "function" ? effect() : effect == "render" && $f42e5033b6ddf80e$export$1aa0accf58dd55e1();
                });
                else $f42e5033b6ddf80e$export$1aa0accf58dd55e1();
            };
            let state = [
                stateValue,
                setStateFunction
            ];
            currentStore.states[currentStore.currentAdaptationIds.state] = state;
        }
        return currentStore.states[currentStore.currentAdaptationIds.state++];
    } else throw new Error("adaptUnifiedState() can only be used inside a Component or a Custom Adaptation.");
}
var $06d6a5c9deab7415$export$2e2bcd8739ae039 = $06d6a5c9deab7415$var$adaptUnifiedState;



function $ce48106bca548d75$var$adaptRef(initialRefValue) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.refs) {
        currentStore.refs = [];
        currentStore.currentAdaptationIds.ref = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.ref in currentStore.refs)) {
            let ref = initialRefValue;
            currentStore.refs[currentStore.currentAdaptationIds.ref] = ref;
        }
        return currentStore.refs[currentStore.currentAdaptationIds.ref++];
    } else throw new Error("adaptRef() can only be used inside a Component or a Custom Adaptation.");
}
var $ce48106bca548d75$export$2e2bcd8739ae039 = $ce48106bca548d75$var$adaptRef;





function $ae8e82890f0d4c9a$var$adaptMemo(fn, guards) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.memos) {
        currentStore.memos = [];
        currentStore.currentAdaptationIds.memo = 0;
    }
    if (!guards) guards = [
        fn
    ];
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.memo in currentStore.memos)) currentStore.memos[currentStore.currentAdaptationIds.memo] = [];
        let memo = currentStore.memos[currentStore.currentAdaptationIds.memo];
        if ($98ed1c2b27fd185d$export$2e2bcd8739ae039(memo[1], guards)) try {
            memo[0] = fn();
        } finally{
            memo[1] = guards;
        }
        currentStore.currentAdaptationIds.memo++;
        return memo[0];
    } else throw new Error("adaptMemo() can only be used inside a Component or a Custom Adaptation.");
}
var $ae8e82890f0d4c9a$export$2e2bcd8739ae039 = $ae8e82890f0d4c9a$var$adaptMemo;




function $f70cb2dda874a3b5$var$adaptCallback(fn, guards) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore) return $ae8e82890f0d4c9a$export$2e2bcd8739ae039(()=>{
        return fn;
    }, guards);
    else throw new Error("adaptCallback() can only be used inside a Component or a Custom Adaptation.");
}
var $f70cb2dda874a3b5$export$2e2bcd8739ae039 = $f70cb2dda874a3b5$var$adaptCallback;




function $225fb0f66a4ed59f$var$adaptEvents(eventsObject) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.events) currentStore.events = {
    };
    if (currentStore) {
        let eventArray = [];
        Object.keys(eventsObject).forEach((eventKey)=>{
            if (!currentStore.events[eventKey]) {
                if (typeof eventsObject[eventKey] == "function") currentStore.events[eventKey] = eventsObject[eventKey];
            }
            eventsObject[eventKey] === "render" ? eventArray.push($f42e5033b6ddf80e$export$1aa0accf58dd55e1) : eventArray.push(currentStore.events[eventKey]);
        });
        return ()=>{
            eventArray.forEach((eventFunction)=>typeof eventFunction == "function" && eventFunction()
            );
        };
    } else throw new Error("adaptEvents() can only be used inside a Component or a Custom Adaptation.");
}
var $225fb0f66a4ed59f$export$2e2bcd8739ae039 = $225fb0f66a4ed59f$var$adaptEvents;




export {$cb3597414830fe60$export$2e2bcd8739ae039 as Component, $26569a28d0da7810$export$2e2bcd8739ae039 as $, $e6d95b80e07e2d2a$re_export$html as html, $e6d95b80e07e2d2a$re_export$classMap as classMap, $e6d95b80e07e2d2a$re_export$styleMap as styleMap, $e6d95b80e07e2d2a$re_export$guard as guard, $e6d95b80e07e2d2a$re_export$cache as cache, $e6d95b80e07e2d2a$re_export$repeat as repeat, $e6d95b80e07e2d2a$re_export$live as live, $e6d95b80e07e2d2a$re_export$ifDefined as ifDefined, $e6d95b80e07e2d2a$re_export$ref as ref, $e6d95b80e07e2d2a$re_export$until as until, $ec7425f6b72a06da$export$2e2bcd8739ae039 as adaptState, $06d6a5c9deab7415$export$2e2bcd8739ae039 as adaptUnifiedState, $ce48106bca548d75$export$2e2bcd8739ae039 as adaptRef, $0d6af4b0461a5088$export$d37ff70272dc6b7e as adaptEffect, $ae8e82890f0d4c9a$export$2e2bcd8739ae039 as adaptMemo, $f70cb2dda874a3b5$export$2e2bcd8739ae039 as adaptCallback, $225fb0f66a4ed59f$export$2e2bcd8739ae039 as adaptEvents};
//# sourceMappingURL=nqtui.js.map

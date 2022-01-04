import {html as $e6d95b80e07e2d2a$re_export$html, render as $c1Qrr$render, noChange as $c1Qrr$noChange} from "lit-html";
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



//use WeakMap to store adaptation stores for more memory efficiency and
//potentially faster access time for stores.
const $15882dbcd04d9f27$var$stores = new WeakMap();
let $15882dbcd04d9f27$var$currentStore;
let $15882dbcd04d9f27$var$currentStoreId;
function $15882dbcd04d9f27$export$8952e4d023034a8d(storeId) {
    //create adaptation store if it doesn't exist and add up.
    if (!$15882dbcd04d9f27$var$stores.has(storeId)) {
        const store = {
            currentAdaptationIds: {
            }
        };
        $15882dbcd04d9f27$var$stores.set(storeId, store);
    }
    //prepare adaptation store and its id for access.
    $15882dbcd04d9f27$var$currentStore = $15882dbcd04d9f27$var$stores.get(storeId);
    $15882dbcd04d9f27$var$currentStoreId = storeId;
    //reset adaptation ids to enable adaptation data to be accessed in the
    //right order.
    Object.keys($15882dbcd04d9f27$var$currentStore.currentAdaptationIds).forEach((id)=>$15882dbcd04d9f27$var$currentStore.currentAdaptationIds[id] = 0
    );
}
function $15882dbcd04d9f27$export$9d75f3e1a7e94aee() {
    return $15882dbcd04d9f27$var$currentStore;
}
function $15882dbcd04d9f27$export$9e78cbb868ddafad() {
    return $15882dbcd04d9f27$var$currentStoreId;
}
function $15882dbcd04d9f27$export$6fec604aa7293d0c(storeId) {
    return $15882dbcd04d9f27$var$stores.get(storeId);
}
function $15882dbcd04d9f27$export$386be634f17bdf08() {
    $15882dbcd04d9f27$var$currentStore = null;
    $15882dbcd04d9f27$var$currentStoreId = null;
}
//call all pending store cleanups and destroy store.
function $15882dbcd04d9f27$export$ddf93ecef02cd077(storeId) {
    const currentStore = $15882dbcd04d9f27$export$6fec604aa7293d0c(storeId);
    if (currentStore.instantCleanups) currentStore.instantCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup()
    );
    if (currentStore.invocationCleanups) currentStore.invocationCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup()
    );
    if (currentStore.asyncCleanups) currentStore.asyncCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup()
    );
    if (currentStore.particleCleanups) currentStore.particleCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup()
    );
    if (currentStore.derivativeCleanups) currentStore.derivativeCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup()
    );
    $15882dbcd04d9f27$var$stores.delete(storeId);
}
//render associated component when called with store ids of components.
//when called with store ids of custom adaptations and other non-components,
//call their update function.
function $15882dbcd04d9f27$export$fa7f552cb3a457a6(storeId) {
    if (storeId.Component) {
        storeId.setValue(storeId.Component(storeId.oldProps));
        $15882dbcd04d9f27$export$386be634f17bdf08();
    }
}
let $15882dbcd04d9f27$var$preventMultipleRenders = false;
function $15882dbcd04d9f27$export$e7f1d62916683ee7() {
    return $15882dbcd04d9f27$var$preventMultipleRenders;
}
function $15882dbcd04d9f27$export$743647d42396ef87(boolean) {
    $15882dbcd04d9f27$var$preventMultipleRenders = boolean;
}



class $26569a28d0da7810$var$$$ extends $c1Qrr$AsyncDirective {
    constructor(part){
        super(part);
        //boolean flag to enable initialization of the
        //component in the update method.
        this.initialization = true;
    }
    initializeComponent(Component, props1, parent) {
        //check if component is class component and add an instance of it to the directive
        //instance as its associated component.
        if (Component.prototype && Component.prototype.isClassComponent) this.ClassComponent = new Component(props1);
        this.Component = (props)=>{
            if (this.ClassComponent) {
                this.ClassComponent.addProps(props);
                this.ClassComponent.parent = parent;
            }
            //prepare adaptation store for component.
            $15882dbcd04d9f27$export$8952e4d023034a8d(this);
            //check "preventMultipleRenders" flag to prevent multiple redundant
            //re-rendering of components.
            //return component's return value to be rendered.
            if (!$15882dbcd04d9f27$export$e7f1d62916683ee7()) return this.ClassComponent ? this.ClassComponent.construct({
                parent: parent,
                ...props
            }) : Component({
                parent: parent,
                ...props
            });
            else if (this.changed) {
                this.changed = false;
                queueMicrotask(()=>this.changed = true
                );
                return this.ClassComponent ? this.ClassComponent.construct({
                    parent: parent,
                    ...props
                }) : Component({
                    parent: parent,
                    ...props
                });
            } else return $c1Qrr$noChange;
        };
        //initialize "changed" flag as true.
        this.changed = true;
        //prevent re-initialization of component on subsequent renders after
        //initialization.
        this.initialization = false;
    }
    disconnected() {
        //call pending cleanups and destroy component adaptation store.
        $15882dbcd04d9f27$export$ddf93ecef02cd077(this);
    }
    update(part1, [Component1, props]) {
        //initialize component on first render
        if (this.initialization) this.initializeComponent(Component1, props, part1.parentNode);
        //keep old props to enable reuse when updating the component independently of it's
        //parent.
        this.oldProps = props;
        return this.render(Component1, props, part1.parentNode);
    }
    render(Component2, props2, parent1) {
        return this.Component(props2);
    }
}
const $26569a28d0da7810$var$$ = $c1Qrr$directive($26569a28d0da7810$var$$$);
var $26569a28d0da7810$export$2e2bcd8739ae039 = $26569a28d0da7810$var$$;



class $cb3597414830fe60$export$2e2bcd8739ae039 {
    constructor(props){
        //initialize component with props.
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
    static createRoot(component, props1) {
        //check whether or not "renderContainer" is a string and handle it
        //accordingly.
        if (typeof props1.renderContainer === "string" || props1.renderContainer instanceof String) props1.renderContainer = document.querySelector(props1.renderContainer);
        const renderComponent = ()=>$c1Qrr$render((()=>$e6d95b80e07e2d2a$re_export$html` ${$26569a28d0da7810$export$2e2bcd8739ae039(component, props1)}`
            )(), props1.renderContainer, props1.renderOptions)
        ;
        //queue microtask to render the component to enable all extensions to run first.
        queueMicrotask(renderComponent);
        //release the reference to the current store.
        $15882dbcd04d9f27$export$386be634f17bdf08();
        //return "renderComponet" function to allow re-rendering of whole root
        //component tree.
        return renderComponent;
    }
    static use(extension) {
        extension.addAdaptationMethods({
            getCurrentStore: $15882dbcd04d9f27$export$9d75f3e1a7e94aee,
            getCurrentStoreId: $15882dbcd04d9f27$export$9e78cbb868ddafad,
            renderComponent: $15882dbcd04d9f27$export$fa7f552cb3a457a6,
            getPreventMultipleRenders: $15882dbcd04d9f27$export$e7f1d62916683ee7,
            setPreventMultipleRenders: $15882dbcd04d9f27$export$743647d42396ef87
        });
    }
    addProps(props2) {
        Object.assign(this.props, props2);
        return this;
    }
    render(container, renderOptions) {
        if (renderOptions) $c1Qrr$render(this.construct(), container, renderOptions);
        else $c1Qrr$render(this.construct(), container);
    }
}
$cb3597414830fe60$export$2e2bcd8739ae039.prototype.isClassComponent = true;















function $ec7425f6b72a06da$var$commonSetStateFunctionality(effectArrayOrFunction, currentStoreId) {
    if (effectArrayOrFunction) {
        if (typeof effectArrayOrFunction == "function") effectArrayOrFunction();
        else effectArrayOrFunction.forEach((effect)=>{
            if (effect.fn) typeof effect.fn == "function" ? effect.fn(...effect.args) : effect.fn === "render" && $15882dbcd04d9f27$export$fa7f552cb3a457a6(currentStoreId);
            else typeof effect == "function" ? effect() : effect === "render" && $15882dbcd04d9f27$export$fa7f552cb3a457a6(currentStoreId);
        });
    } else $15882dbcd04d9f27$export$fa7f552cb3a457a6(currentStoreId);
}
function $ec7425f6b72a06da$var$adaptState(initialStateValue, mode) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    const currentStoreId = $15882dbcd04d9f27$export$9e78cbb868ddafad();
    if (currentStore && !currentStore.states) {
        currentStore.states = [];
        currentStore.currentAdaptationIds.state = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.state in currentStore.states)) {
            let stateValue = typeof initialStateValue == "function" ? initialStateValue() : initialStateValue;
            let setStateFunction;
            if (!mode) setStateFunction = (newStateValue, effectArray)=>{
                state[0] = typeof newStateValue == "function" ? newStateValue(state[0]) : newStateValue;
                $ec7425f6b72a06da$var$commonSetStateFunctionality(effectArray, currentStoreId);
            };
            else if (mode === "getter") setStateFunction = (newStateValue, effectArray)=>{
                state[2] = typeof newStateValue == "function" ? newStateValue(state[2]) : newStateValue;
                $ec7425f6b72a06da$var$commonSetStateFunctionality(effectArray, currentStoreId);
            };
            else if (mode === "unified") setStateFunction = (newStateValue, effectArray)=>{
                Object.assign(state[0], newStateValue);
                $ec7425f6b72a06da$var$commonSetStateFunctionality(effectArray, currentStoreId);
            };
            let state;
            if (!mode || mode === "unified") state = [
                stateValue,
                setStateFunction
            ];
            else if (mode === "getter") state = [
                ()=>state[2]
                ,
                setStateFunction,
                stateValue
            ];
            currentStore.states[currentStore.currentAdaptationIds.state] = state;
        }
        return currentStore.states[currentStore.currentAdaptationIds.state++];
    } else throw new Error("adaptState() can only be used inside a Component or a Custom Adaptation.");
}
var $ec7425f6b72a06da$export$2e2bcd8739ae039 = $ec7425f6b72a06da$var$adaptState;



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



function $98ed1c2b27fd185d$var$guardsChanged(guards1, guards2) {
    if (!guards1 || !guards2) return true;
    if (guards1.length !== guards2.length) return true;
    let guardLength = guards1.length;
    for(let i = 0; i < guardLength; i++){
        if (!(guards1[i] === guards2[i])) return true;
    }
    return false;
}
var $98ed1c2b27fd185d$export$2e2bcd8739ae039 = $98ed1c2b27fd185d$var$guardsChanged;


function $0d6af4b0461a5088$var$adaptEffect(fn, guards) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.asyncEffects) {
        currentStore.asyncEffects = [];
        currentStore.currentAdaptationIds.asyncEffect = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.asyncEffect in currentStore.asyncEffects)) currentStore.asyncEffects[currentStore.currentAdaptationIds.asyncEffect] = [];
        let asyncEffectId = currentStore.currentAdaptationIds.asyncEffect;
        let asyncEffect = currentStore.asyncEffects[asyncEffectId];
        if ($98ed1c2b27fd185d$export$2e2bcd8739ae039(asyncEffect[1], guards)) {
            asyncEffect[0] = ()=>{
                if (currentStore.asyncCleanups) {
                    if (typeof currentStore.asyncCleanups[asyncEffectId] == "function") {
                        currentStore.asyncCleanups[asyncEffectId]();
                        currentStore.asyncCleanups[asyncEffectId] = undefined;
                    }
                }
                if (!currentStore.asyncCleanups) currentStore.asyncCleanups = [];
                currentStore.asyncCleanups[asyncEffectId] = fn();
            };
            $0d6af4b0461a5088$var$addAsyncEffect(asyncEffect[0]);
            asyncEffect[0] = null;
            asyncEffect[1] = guards;
        }
        currentStore.currentAdaptationIds.asyncEffect++;
    } else throw new Error("adaptEffect() can only be used inside a Component or a Custom Adaptation.");
}
const $0d6af4b0461a5088$var$asyncEffectAndCleanupArray = [];
function $0d6af4b0461a5088$var$addAsyncEffect(effect1) {
    $0d6af4b0461a5088$var$asyncEffectAndCleanupArray.push(effect1);
    if ($0d6af4b0461a5088$var$asyncEffectAndCleanupArray.length === 1) setTimeout(()=>{
        const newEffectAndCleanupArray = [
            ...$0d6af4b0461a5088$var$asyncEffectAndCleanupArray
        ];
        $0d6af4b0461a5088$var$asyncEffectAndCleanupArray.length = 0;
        newEffectAndCleanupArray.forEach((effect)=>effect()
        );
    });
}
var $0d6af4b0461a5088$export$2e2bcd8739ae039 = $0d6af4b0461a5088$var$adaptEffect;




function $fe99c14fcbd684a6$var$adaptInstantEffect(fn, guards) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.instantEffects) {
        currentStore.instantEffects = [];
        currentStore.currentAdaptationIds.instantEffect = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.instantEffect in currentStore.instantEffects)) currentStore.instantEffects[currentStore.currentAdaptationIds.instantEffect] = [];
        let instantEffectId = currentStore.currentAdaptationIds.instantEffect;
        let instantEffect = currentStore.instantEffects[instantEffectId];
        if ($98ed1c2b27fd185d$export$2e2bcd8739ae039(instantEffect[1], guards)) {
            instantEffect[0] = ()=>{
                if (currentStore.instantCleanups) {
                    if (typeof currentStore.instantCleanups[instantEffectId] == "function") {
                        currentStore.instantCleanups[instantEffectId]();
                        currentStore.instantCleanups[instantEffectId] = undefined;
                    }
                }
                if (!currentStore.instantCleanups) currentStore.instantCleanups = [];
                currentStore.instantCleanups[instantEffectId] = fn();
            };
            instantEffect[0]();
            instantEffect[0] = null;
            instantEffect[1] = guards;
        }
        currentStore.currentAdaptationIds.instantEffect++;
    } else throw new Error("adaptInstantEffect() can only be used inside a Component or a Custom Adaptation.");
}
var $fe99c14fcbd684a6$export$2e2bcd8739ae039 = $fe99c14fcbd684a6$var$adaptInstantEffect;




function $026fd74847e27bd3$var$adaptInvocationEffect(fn, guards) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.invocationEffects) {
        currentStore.invocationEffects = [];
        currentStore.currentAdaptationIds.invocationEffect = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.invocationEffect in currentStore.invocationEffects)) currentStore.invocationEffects[currentStore.currentAdaptationIds.invocationEffect] = [];
        let invocationEffectId = currentStore.currentAdaptationIds.invocationEffect;
        let invocationEffect = currentStore.invocationEffects[invocationEffectId];
        if ($98ed1c2b27fd185d$export$2e2bcd8739ae039(invocationEffect[1], guards)) {
            invocationEffect[0] = ()=>{
                if (currentStore.invocationCleanups) {
                    if (typeof currentStore.invocationCleanups[invocationEffectId] == "function") {
                        currentStore.invocationCleanups[invocationEffectId]();
                        currentStore.invocationCleanups[invocationEffectId] = undefined;
                    }
                }
                if (!currentStore.invocationCleanups) currentStore.invocationCleanups = [];
                currentStore.invocationCleanups[invocationEffectId] = fn();
            };
            const invocationEffectStore = invocationEffect[0];
            queueMicrotask(()=>invocationEffectStore()
            );
            invocationEffect[0] = null;
            invocationEffect[1] = guards;
        }
        currentStore.currentAdaptationIds.invocationEffect++;
    } else throw new Error("adaptInvocationEffect() can only be used inside a Component or a Custom Adaptation.");
}
var $026fd74847e27bd3$export$2e2bcd8739ae039 = $026fd74847e27bd3$var$adaptInvocationEffect;




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
        if ($98ed1c2b27fd185d$export$2e2bcd8739ae039(memo[1], guards)) {
            memo[0] = fn();
            memo[1] = guards;
        }
        currentStore.currentAdaptationIds.memo++;
        return memo[0];
    } else throw new Error("adaptMemo() can only be used inside a Component or a Custom Adaptation.");
}
var $ae8e82890f0d4c9a$export$2e2bcd8739ae039 = $ae8e82890f0d4c9a$var$adaptMemo;




function $f70cb2dda874a3b5$var$adaptCallback(fn, inputGuards) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore) return $ae8e82890f0d4c9a$export$2e2bcd8739ae039(()=>{
        return fn;
    }, inputGuards);
    else throw new Error("adaptCallback() can only be used inside a Component or a Custom Adaptation.");
}
var $f70cb2dda874a3b5$export$2e2bcd8739ae039 = $f70cb2dda874a3b5$var$adaptCallback;



function $23bec188dca13918$var$adaptFunction(eventArrayOrFuntion, ...setupEventArgs) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    const currentStoreId = $15882dbcd04d9f27$export$9e78cbb868ddafad();
    if (currentStore && !currentStore.events) {
        currentStore.events = [];
        currentStore.currentAdaptationIds.event = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.event in currentStore.events)) {
            currentStore.events[currentStore.currentAdaptationIds.event] = [];
            let event = currentStore.events[currentStore.currentAdaptationIds.event];
            event[0] = (...invocationEventArgs)=>$23bec188dca13918$var$emitEvent(eventArrayOrFuntion, currentStoreId, event[1], invocationEventArgs)
            ;
        }
        let event = currentStore.events[currentStore.currentAdaptationIds.event];
        event[1] = setupEventArgs;
        currentStore.currentAdaptationIds.event++;
        return event[0];
    } else throw new Error("adaptFunction() can only be used inside a Component or a Custom Adaptation.");
}
function $23bec188dca13918$var$emitEvent(eventArrayOrFuntion, currentStoreId, setupEventArgs, invocationEventArgs) {
    if (eventArrayOrFuntion) {
        if (typeof eventArrayOrFuntion == "function") eventArrayOrFuntion(...setupEventArgs, ...invocationEventArgs);
        else eventArrayOrFuntion.forEach((event)=>{
            typeof event == "function" ? event(...setupEventArgs, ...invocationEventArgs) : event === "render" && $15882dbcd04d9f27$export$fa7f552cb3a457a6(currentStoreId);
        });
    } else $15882dbcd04d9f27$export$fa7f552cb3a457a6(currentStoreId);
}
var $23bec188dca13918$export$2e2bcd8739ae039 = $23bec188dca13918$var$adaptFunction;




export {$cb3597414830fe60$export$2e2bcd8739ae039 as Component, $26569a28d0da7810$export$2e2bcd8739ae039 as $, $e6d95b80e07e2d2a$re_export$html as html, $e6d95b80e07e2d2a$re_export$classMap as classMap, $e6d95b80e07e2d2a$re_export$styleMap as styleMap, $e6d95b80e07e2d2a$re_export$guard as guard, $e6d95b80e07e2d2a$re_export$cache as cache, $e6d95b80e07e2d2a$re_export$repeat as repeat, $e6d95b80e07e2d2a$re_export$live as live, $e6d95b80e07e2d2a$re_export$ifDefined as ifDefined, $e6d95b80e07e2d2a$re_export$ref as ref, $e6d95b80e07e2d2a$re_export$until as until, $15882dbcd04d9f27$export$8952e4d023034a8d as adapt, $15882dbcd04d9f27$export$386be634f17bdf08 as release, $15882dbcd04d9f27$export$ddf93ecef02cd077 as detonate, $ec7425f6b72a06da$export$2e2bcd8739ae039 as adaptState, $ce48106bca548d75$export$2e2bcd8739ae039 as adaptRef, $0d6af4b0461a5088$export$2e2bcd8739ae039 as adaptEffect, $fe99c14fcbd684a6$export$2e2bcd8739ae039 as adaptInstantEffect, $026fd74847e27bd3$export$2e2bcd8739ae039 as adaptInvocationEffect, $ae8e82890f0d4c9a$export$2e2bcd8739ae039 as adaptMemo, $f70cb2dda874a3b5$export$2e2bcd8739ae039 as adaptCallback, $23bec188dca13918$export$2e2bcd8739ae039 as adaptFunction};
//# sourceMappingURL=nqtui.js.map

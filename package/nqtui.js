import {html as $9406df86d718cc4c$re_export$html, render as $9X7PK$render, noChange as $9X7PK$noChange} from "lit-html";
import {classMap as $9406df86d718cc4c$re_export$classMap} from "lit-html/directives/class-map.js";
import {styleMap as $9406df86d718cc4c$re_export$styleMap} from "lit-html/directives/style-map.js";
import {guard as $9406df86d718cc4c$re_export$guard} from "lit-html/directives/guard.js";
import {cache as $9406df86d718cc4c$re_export$cache} from "lit-html/directives/cache.js";
import {repeat as $9406df86d718cc4c$re_export$repeat} from "lit-html/directives/repeat.js";
import {live as $9406df86d718cc4c$re_export$live} from "lit-html/directives/live.js";
import {ifDefined as $9406df86d718cc4c$re_export$ifDefined} from "lit-html/directives/if-defined.js";
import {ref as $9406df86d718cc4c$re_export$ref, createRef as $9406df86d718cc4c$re_export$createRef} from "lit-html/directives/ref.js";
import {until as $9406df86d718cc4c$re_export$until} from "lit-html/directives/until.js";
import {asyncAppend as $9406df86d718cc4c$re_export$asyncAppend} from "lit-html/directives/async-append.js";
import {asyncReplace as $9406df86d718cc4c$re_export$asyncReplace} from "lit-html/directives/async-replace.js";
import {AsyncDirective as $9X7PK$AsyncDirective, directive as $9X7PK$directive} from "lit-html/async-directive.js";



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
    if (!$15882dbcd04d9f27$var$currentStore.currentAdaptationIdStrings) {
        $15882dbcd04d9f27$var$currentStore.currentAdaptationIdStrings = "unset";
        return;
    }
    if ($15882dbcd04d9f27$var$currentStore.currentAdaptationIdStrings === "unset") $15882dbcd04d9f27$var$currentStore.currentAdaptationIdStrings = Object.keys($15882dbcd04d9f27$var$currentStore.currentAdaptationIds);
    //reset adaptation ids to enable adaptation data to be accessed in the
    //right order.
    const currentAdaptationIdStrings = $15882dbcd04d9f27$var$currentStore.currentAdaptationIdStrings;
    const length = $15882dbcd04d9f27$var$currentStore.currentAdaptationIdStrings.length;
    for(let i = 0; i < length; i++){
        const adaptationIdString = currentAdaptationIdStrings[i];
        $15882dbcd04d9f27$var$currentStore.currentAdaptationIds[adaptationIdString] = 0;
    }
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
const $15882dbcd04d9f27$var$renderArray1 = [];
const $15882dbcd04d9f27$var$renderArray2 = [];
let $15882dbcd04d9f27$var$one = true;
//render associated component when called with store ids of components.
//when called with store ids of custom adaptations and other non-components,
//call their update function.
function $15882dbcd04d9f27$export$fa7f552cb3a457a6(storeId1) {
    if ($15882dbcd04d9f27$var$one) {
        $15882dbcd04d9f27$var$renderArray1.push(storeId1);
        if ($15882dbcd04d9f27$var$renderArray1.length === 1) queueMicrotask(()=>{
            $15882dbcd04d9f27$var$one = false;
            $15882dbcd04d9f27$var$renderArray1.forEach((storeId)=>{
                if (storeId.Component) {
                    storeId.setValue(storeId.Component(storeId.oldProps));
                    $15882dbcd04d9f27$export$386be634f17bdf08();
                } else if (storeId.call) storeId.call();
            });
            $15882dbcd04d9f27$var$renderArray1.length = 0;
        });
    } else {
        $15882dbcd04d9f27$var$renderArray2.push(storeId1);
        if ($15882dbcd04d9f27$var$renderArray2.length === 1) queueMicrotask(()=>{
            $15882dbcd04d9f27$var$one = true;
            $15882dbcd04d9f27$var$renderArray2.forEach((storeId)=>{
                if (storeId.Component) {
                    storeId.setValue(storeId.Component(storeId.oldProps));
                    $15882dbcd04d9f27$export$386be634f17bdf08();
                } else if (storeId.call) storeId.call();
            });
            $15882dbcd04d9f27$var$renderArray2.length = 0;
        });
    }
}


const $6ededb60ed70614e$var$changedArray1 = [];
const $6ededb60ed70614e$var$changedArray2 = [];
let $6ededb60ed70614e$var$one = true;
function $6ededb60ed70614e$export$2e2bcd8739ae039(storeId1) {
    if ($6ededb60ed70614e$var$one) {
        $6ededb60ed70614e$var$changedArray1.push(storeId1);
        if ($6ededb60ed70614e$var$changedArray1.length === 1) queueMicrotask(()=>{
            $6ededb60ed70614e$var$one = false;
            $6ededb60ed70614e$var$changedArray1.forEach((storeId)=>storeId.changed = true
            );
            $6ededb60ed70614e$var$changedArray1.length = 0;
        });
    } else {
        $6ededb60ed70614e$var$changedArray2.push(storeId1);
        if ($6ededb60ed70614e$var$changedArray2.length === 1) queueMicrotask(()=>{
            $6ededb60ed70614e$var$one = true;
            $6ededb60ed70614e$var$changedArray2.forEach((storeId)=>storeId.changed = true
            );
            $6ededb60ed70614e$var$changedArray2.length = 0;
        });
    }
}



class $26569a28d0da7810$var$$$ extends $9X7PK$AsyncDirective {
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
            //check "preventMultipleRenders" flag to prevent multiple redundant
            //re-rendering of components.
            //return component's return value to be rendered.
            if (this.changed) {
                this.changed = false;
                $6ededb60ed70614e$export$2e2bcd8739ae039(this);
                //prepare adaptation store for component.
                $15882dbcd04d9f27$export$8952e4d023034a8d(this);
                return this.ClassComponent ? this.ClassComponent.construct({
                    parent: parent,
                    ...props
                }) : Component({
                    parent: parent,
                    ...props
                });
            } else return $9X7PK$noChange;
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
        return this.render(props);
    }
    render(props2) {
        return this.Component(props2);
    }
}
const $26569a28d0da7810$var$$ = $9X7PK$directive($26569a28d0da7810$var$$$);
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
        const renderComponent = ()=>$9X7PK$render((()=>$9406df86d718cc4c$re_export$html` ${$26569a28d0da7810$export$2e2bcd8739ae039(component, props1)}`
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
            renderComponent: $15882dbcd04d9f27$export$fa7f552cb3a457a6
        });
    }
    addProps(props2) {
        Object.assign(this.props, props2);
        return this;
    }
    render(container, renderOptions) {
        if (renderOptions) $9X7PK$render(this.construct(), container, renderOptions);
        else $9X7PK$render(this.construct(), container);
    }
}
$cb3597414830fe60$export$2e2bcd8739ae039.prototype.isClassComponent = true;


















function $ca582caaf24723cb$var$adaptation(adaptationObject) {
    const customAdaptation = {
    };
    customAdaptation.connect = adaptationObject.connect;
    customAdaptation.call = ()=>{
        $15882dbcd04d9f27$export$8952e4d023034a8d(customAdaptation);
        const returnValue = adaptationObject.call();
        $15882dbcd04d9f27$export$386be634f17bdf08();
        return returnValue;
    };
    customAdaptation.detonate = ()=>$15882dbcd04d9f27$export$ddf93ecef02cd077(customAdaptation)
    ;
    return customAdaptation;
}
var $ca582caaf24723cb$export$2e2bcd8739ae039 = $ca582caaf24723cb$var$adaptation;




function $5f0febd785fa2de4$var$commonSetStateFunctionality(effectArrayOrFunction, args, currentStoreId) {
    if (effectArrayOrFunction) {
        if (typeof effectArrayOrFunction == "function") effectArrayOrFunction(...args);
        else effectArrayOrFunction.forEach((effect)=>{
            effect === "render" || effect === "update" ? $15882dbcd04d9f27$export$fa7f552cb3a457a6(currentStoreId) : effect(...args);
        });
    } else $15882dbcd04d9f27$export$fa7f552cb3a457a6(currentStoreId);
}
var $5f0febd785fa2de4$export$2e2bcd8739ae039 = $5f0febd785fa2de4$var$commonSetStateFunctionality;


function $ec7425f6b72a06da$var$adaptState(initialStateValue) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    const currentStoreId = $15882dbcd04d9f27$export$9e78cbb868ddafad();
    if (currentStore && !currentStore.states) {
        currentStore.states = [];
        currentStore.currentAdaptationIds.state = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.state in currentStore.states)) {
            const stateValue = typeof initialStateValue == "function" ? initialStateValue() : initialStateValue;
            const setStateFunction = (newStateValue, effectArray, ...args)=>{
                const newState = typeof newStateValue == "function" ? newStateValue(state[0]) : newStateValue;
                if (Object.is(newState, state[0])) return;
                state[0] = newState;
                $5f0febd785fa2de4$export$2e2bcd8739ae039(effectArray, args, currentStoreId);
            };
            const state = [
                stateValue,
                setStateFunction
            ];
            currentStore.states[currentStore.currentAdaptationIds.state] = state;
        }
        return currentStore.states[currentStore.currentAdaptationIds.state++];
    } else throw new Error("adaptState() can only be used inside a Component or a Custom Adaptation.");
}
var $ec7425f6b72a06da$export$2e2bcd8739ae039 = $ec7425f6b72a06da$var$adaptState;




function $5c5f4b29d8628b75$var$adaptGetState(initialStateValue) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    const currentStoreId = $15882dbcd04d9f27$export$9e78cbb868ddafad();
    if (currentStore && !currentStore.states) {
        currentStore.states = [];
        currentStore.currentAdaptationIds.state = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.state in currentStore.states)) {
            const stateValue = typeof initialStateValue == "function" ? initialStateValue() : initialStateValue;
            const setStateFunction = (newStateValue, effectArray, ...args)=>{
                const newState = typeof newStateValue == "function" ? newStateValue(state[2]) : newStateValue;
                if (Object.is(newState, state[2])) return;
                state[2] = newState;
                $5f0febd785fa2de4$export$2e2bcd8739ae039(effectArray, args, currentStoreId);
            };
            const state = [
                ()=>state[2]
                ,
                setStateFunction,
                stateValue
            ];
            currentStore.states[currentStore.currentAdaptationIds.state] = state;
        }
        return currentStore.states[currentStore.currentAdaptationIds.state++];
    } else throw new Error("adaptGetState() can only be used inside a Component or a Custom Adaptation.");
}
var $5c5f4b29d8628b75$export$2e2bcd8739ae039 = $5c5f4b29d8628b75$var$adaptGetState;



function $ce48106bca548d75$var$adaptRef(initialRefValue) {
    const currentStore = $15882dbcd04d9f27$export$9d75f3e1a7e94aee();
    if (currentStore && !currentStore.refs) {
        currentStore.refs = [];
        currentStore.currentAdaptationIds.ref = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.ref in currentStore.refs)) {
            let ref = {
            };
            ref.current = initialRefValue;
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
const $0d6af4b0461a5088$var$asyncEffectAndCleanupArray1 = [];
const $0d6af4b0461a5088$var$asyncEffectAndCleanupArray2 = [];
let $0d6af4b0461a5088$var$one = true;
function $0d6af4b0461a5088$var$addAsyncEffect(effect1) {
    if ($0d6af4b0461a5088$var$one) {
        $0d6af4b0461a5088$var$asyncEffectAndCleanupArray1.push(effect1);
        if ($0d6af4b0461a5088$var$asyncEffectAndCleanupArray1.length === 1) setTimeout(()=>{
            $0d6af4b0461a5088$var$one = false;
            $0d6af4b0461a5088$var$asyncEffectAndCleanupArray1.forEach((effect)=>effect()
            );
            $0d6af4b0461a5088$var$asyncEffectAndCleanupArray1.length = 0;
        });
    } else {
        $0d6af4b0461a5088$var$asyncEffectAndCleanupArray2.push(effect1);
        if ($0d6af4b0461a5088$var$asyncEffectAndCleanupArray2.length === 1) setTimeout(()=>{
            $0d6af4b0461a5088$var$one = true;
            $0d6af4b0461a5088$var$asyncEffectAndCleanupArray2.forEach((effect)=>effect()
            );
            $0d6af4b0461a5088$var$asyncEffectAndCleanupArray2.length = 0;
        });
    }
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
            $026fd74847e27bd3$var$addInvocationEffect(invocationEffectStore);
            invocationEffect[0] = null;
            invocationEffect[1] = guards;
        }
        currentStore.currentAdaptationIds.invocationEffect++;
    } else throw new Error("adaptInvocationEffect() can only be used inside a Component or a Custom Adaptation.");
}
const $026fd74847e27bd3$var$invocationEffectArray1 = [];
const $026fd74847e27bd3$var$invocationEffectArray2 = [];
let $026fd74847e27bd3$var$one = true;
function $026fd74847e27bd3$var$addInvocationEffect(effect1) {
    if ($026fd74847e27bd3$var$one) {
        $026fd74847e27bd3$var$invocationEffectArray1.push(effect1);
        if ($026fd74847e27bd3$var$invocationEffectArray1.length === 1) queueMicrotask(()=>{
            $026fd74847e27bd3$var$one = false;
            $026fd74847e27bd3$var$invocationEffectArray1.forEach((effect)=>effect()
            );
            $026fd74847e27bd3$var$invocationEffectArray1.length = 0;
        });
    } else {
        $026fd74847e27bd3$var$invocationEffectArray2.push(effect1);
        if ($026fd74847e27bd3$var$invocationEffectArray2.length === 1) queueMicrotask(()=>{
            $026fd74847e27bd3$var$one = true;
            $026fd74847e27bd3$var$invocationEffectArray2.forEach((effect)=>effect()
            );
            $026fd74847e27bd3$var$invocationEffectArray2.length = 0;
        });
    }
}
var $026fd74847e27bd3$export$2e2bcd8739ae039 = $026fd74847e27bd3$var$adaptInvocationEffect;


function $ed186fa459d62a45$export$466258458fa544eb(fn) {
    $0d6af4b0461a5088$export$2e2bcd8739ae039(fn, []);
}
function $ed186fa459d62a45$export$a01e723826952f17(fn) {
    $fe99c14fcbd684a6$export$2e2bcd8739ae039(fn, []);
}
function $ed186fa459d62a45$export$b046da93ab4b438c(fn) {
    $026fd74847e27bd3$export$2e2bcd8739ae039(fn, []);
}







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
            event === "render" || event === "update" ? $15882dbcd04d9f27$export$fa7f552cb3a457a6(currentStoreId) : event(...setupEventArgs, ...invocationEventArgs);
        });
    } else $15882dbcd04d9f27$export$fa7f552cb3a457a6(currentStoreId);
}
var $23bec188dca13918$export$2e2bcd8739ae039 = $23bec188dca13918$var$adaptFunction;


var $9406df86d718cc4c$export$2e2bcd8739ae039 = $cb3597414830fe60$export$2e2bcd8739ae039;


export {$9406df86d718cc4c$export$2e2bcd8739ae039 as default, $26569a28d0da7810$export$2e2bcd8739ae039 as $, $9406df86d718cc4c$re_export$html as html, $9406df86d718cc4c$re_export$classMap as classMap, $9406df86d718cc4c$re_export$styleMap as styleMap, $9406df86d718cc4c$re_export$guard as guard, $9406df86d718cc4c$re_export$cache as cache, $9406df86d718cc4c$re_export$repeat as repeat, $9406df86d718cc4c$re_export$live as live, $9406df86d718cc4c$re_export$ifDefined as ifDefined, $9406df86d718cc4c$re_export$ref as ref, $9406df86d718cc4c$re_export$createRef as createRef, $9406df86d718cc4c$re_export$until as until, $9406df86d718cc4c$re_export$asyncAppend as asyncAppend, $9406df86d718cc4c$re_export$asyncReplace as asyncReplace, $15882dbcd04d9f27$export$8952e4d023034a8d as adapt, $15882dbcd04d9f27$export$386be634f17bdf08 as release, $15882dbcd04d9f27$export$ddf93ecef02cd077 as detonate, $ca582caaf24723cb$export$2e2bcd8739ae039 as adaptation, $ec7425f6b72a06da$export$2e2bcd8739ae039 as adaptState, $5c5f4b29d8628b75$export$2e2bcd8739ae039 as adaptGetState, $ce48106bca548d75$export$2e2bcd8739ae039 as adaptRef, $ed186fa459d62a45$export$466258458fa544eb as adaptMount, $ed186fa459d62a45$export$a01e723826952f17 as adaptInstantMount, $ed186fa459d62a45$export$b046da93ab4b438c as adaptInvocationMount, $0d6af4b0461a5088$export$2e2bcd8739ae039 as adaptEffect, $fe99c14fcbd684a6$export$2e2bcd8739ae039 as adaptInstantEffect, $026fd74847e27bd3$export$2e2bcd8739ae039 as adaptInvocationEffect, $ae8e82890f0d4c9a$export$2e2bcd8739ae039 as adaptMemo, $f70cb2dda874a3b5$export$2e2bcd8739ae039 as adaptCallback, $23bec188dca13918$export$2e2bcd8739ae039 as adaptFunction};
//# sourceMappingURL=nqtui.js.map

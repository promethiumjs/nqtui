import {html as $e9d5482ee1d4bd25$re_export$html, render as $6oBH7$render, noChange as $6oBH7$noChange} from "lit-html";
import {classMap as $e9d5482ee1d4bd25$re_export$classMap} from "lit-html/directives/class-map.js";
import {styleMap as $e9d5482ee1d4bd25$re_export$styleMap} from "lit-html/directives/style-map.js";
import {guard as $e9d5482ee1d4bd25$re_export$guard} from "lit-html/directives/guard.js";
import {cache as $e9d5482ee1d4bd25$re_export$cache} from "lit-html/directives/cache.js";
import {repeat as $e9d5482ee1d4bd25$re_export$repeat} from "lit-html/directives/repeat.js";
import {live as $e9d5482ee1d4bd25$re_export$live} from "lit-html/directives/live.js";
import {ifDefined as $e9d5482ee1d4bd25$re_export$ifDefined} from "lit-html/directives/if-defined.js";
import {ref as $e9d5482ee1d4bd25$re_export$ref, createRef as $e9d5482ee1d4bd25$re_export$createRef} from "lit-html/directives/ref.js";
import {until as $e9d5482ee1d4bd25$re_export$until} from "lit-html/directives/until.js";
import {asyncAppend as $e9d5482ee1d4bd25$re_export$asyncAppend} from "lit-html/directives/async-append.js";
import {asyncReplace as $e9d5482ee1d4bd25$re_export$asyncReplace} from "lit-html/directives/async-replace.js";
import {AsyncDirective as $6oBH7$AsyncDirective, directive as $6oBH7$directive} from "lit-html/async-directive.js";



//use WeakMap to store adaptation stores for more memory efficiency and
//potentially faster access time for stores.
const $33b4b724c36214e1$var$stores = new WeakMap();
let $33b4b724c36214e1$var$currentStore;
let $33b4b724c36214e1$var$currentStoreId;
function $33b4b724c36214e1$export$8952e4d023034a8d(storeId) {
    //create adaptation store if it doesn't exist and add up.
    if (!$33b4b724c36214e1$var$stores.has(storeId)) {
        const store = {
            currentAdaptationIds: {}
        };
        $33b4b724c36214e1$var$stores.set(storeId, store);
    }
    //prepare adaptation store and its id for access.
    $33b4b724c36214e1$var$currentStore = $33b4b724c36214e1$var$stores.get(storeId);
    $33b4b724c36214e1$var$currentStoreId = storeId;
    if (!$33b4b724c36214e1$var$currentStore.currentAdaptationIdStrings) {
        $33b4b724c36214e1$var$currentStore.currentAdaptationIdStrings = "unset";
        return;
    }
    if ($33b4b724c36214e1$var$currentStore.currentAdaptationIdStrings === "unset") $33b4b724c36214e1$var$currentStore.currentAdaptationIdStrings = Object.keys($33b4b724c36214e1$var$currentStore.currentAdaptationIds);
    //reset adaptation ids to enable adaptation data to be accessed in the
    //right order.
    const currentAdaptationIdStrings = $33b4b724c36214e1$var$currentStore.currentAdaptationIdStrings;
    const length = $33b4b724c36214e1$var$currentStore.currentAdaptationIdStrings.length;
    for(let i = 0; i < length; i++){
        const adaptationIdString = currentAdaptationIdStrings[i];
        $33b4b724c36214e1$var$currentStore.currentAdaptationIds[adaptationIdString] = 0;
    }
}
function $33b4b724c36214e1$export$9d75f3e1a7e94aee() {
    return $33b4b724c36214e1$var$currentStore;
}
function $33b4b724c36214e1$export$9e78cbb868ddafad() {
    return $33b4b724c36214e1$var$currentStoreId;
}
function $33b4b724c36214e1$export$6fec604aa7293d0c(storeId) {
    return $33b4b724c36214e1$var$stores.get(storeId);
}
function $33b4b724c36214e1$export$386be634f17bdf08() {
    $33b4b724c36214e1$var$currentStore = null;
    $33b4b724c36214e1$var$currentStoreId = null;
}
//call all pending store cleanups and destroy store.
function $33b4b724c36214e1$export$ddf93ecef02cd077(storeId) {
    const currentStore1 = $33b4b724c36214e1$export$6fec604aa7293d0c(storeId);
    if (currentStore1.instantCleanups) currentStore1.instantCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup());
    if (currentStore1.invocationCleanups) currentStore1.invocationCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup());
    if (currentStore1.asyncCleanups) currentStore1.asyncCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup());
    if (currentStore1.particleCleanups) currentStore1.particleCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup());
    if (currentStore1.derivativeCleanups) currentStore1.derivativeCleanups.forEach((cleanup)=>typeof cleanup == "function" && cleanup());
    $33b4b724c36214e1$var$stores.delete(storeId);
}
const $33b4b724c36214e1$var$renderArray1 = [];
const $33b4b724c36214e1$var$renderArray2 = [];
let $33b4b724c36214e1$var$one = true;
//render associated component when called with store ids of components.
//when called with store ids of custom adaptations and other non-components,
//call their update function.
function $33b4b724c36214e1$export$fa7f552cb3a457a6(storeId1) {
    if ($33b4b724c36214e1$var$one) {
        $33b4b724c36214e1$var$renderArray1.push(storeId1);
        if ($33b4b724c36214e1$var$renderArray1.length === 1) queueMicrotask(()=>{
            $33b4b724c36214e1$var$one = false;
            $33b4b724c36214e1$var$renderArray1.forEach((storeId)=>{
                if (storeId.Component) {
                    storeId.setValue(storeId.Component(storeId.oldProps));
                    $33b4b724c36214e1$export$386be634f17bdf08();
                } else if (storeId.call) storeId.call();
            });
            $33b4b724c36214e1$var$renderArray1.length = 0;
        });
    } else {
        $33b4b724c36214e1$var$renderArray2.push(storeId1);
        if ($33b4b724c36214e1$var$renderArray2.length === 1) queueMicrotask(()=>{
            $33b4b724c36214e1$var$one = true;
            $33b4b724c36214e1$var$renderArray2.forEach((storeId)=>{
                if (storeId.Component) {
                    storeId.setValue(storeId.Component(storeId.oldProps));
                    $33b4b724c36214e1$export$386be634f17bdf08();
                } else if (storeId.call) storeId.call();
            });
            $33b4b724c36214e1$var$renderArray2.length = 0;
        });
    }
}


const $6698c711b56a0369$var$changedArray1 = [];
const $6698c711b56a0369$var$changedArray2 = [];
let $6698c711b56a0369$var$one = true;
function $6698c711b56a0369$export$2e2bcd8739ae039(storeId1) {
    if ($6698c711b56a0369$var$one) {
        $6698c711b56a0369$var$changedArray1.push(storeId1);
        if ($6698c711b56a0369$var$changedArray1.length === 1) queueMicrotask(()=>{
            $6698c711b56a0369$var$one = false;
            $6698c711b56a0369$var$changedArray1.forEach((storeId)=>storeId.changed = true);
            $6698c711b56a0369$var$changedArray1.length = 0;
        });
    } else {
        $6698c711b56a0369$var$changedArray2.push(storeId1);
        if ($6698c711b56a0369$var$changedArray2.length === 1) queueMicrotask(()=>{
            $6698c711b56a0369$var$one = true;
            $6698c711b56a0369$var$changedArray2.forEach((storeId)=>storeId.changed = true);
            $6698c711b56a0369$var$changedArray2.length = 0;
        });
    }
}



class $d302ed7d0e97d743$var$$ extends (0, $6oBH7$AsyncDirective) {
    constructor(part){
        super(part);
        //boolean flag to enable initialization of the
        //component in the update method.
        this.initialization = true;
    }
    initializeComponent(Component, parent) {
        this.Component = (props)=>{
            //check "preventMultipleRenders" flag to prevent multiple redundant
            //re-rendering of components.
            //return component's return value to be rendered.
            if (this.changed) {
                this.changed = false;
                (0, $6698c711b56a0369$export$2e2bcd8739ae039)(this);
                //prepare adaptation store for component.
                (0, $33b4b724c36214e1$export$8952e4d023034a8d)(this);
                return Component({
                    parent: parent,
                    ...props
                });
            } else return 0, $6oBH7$noChange;
        };
        //initialize "changed" flag as true.
        this.changed = true;
        //prevent re-initialization of component on subsequent renders after
        //initialization.
        this.initialization = false;
    }
    disconnected() {
        //call pending cleanups and destroy component adaptation store.
        (0, $33b4b724c36214e1$export$ddf93ecef02cd077)(this);
    }
    update(part, [Component, props]) {
        //initialize component on first render
        if (this.initialization) this.initializeComponent(Component, part.parentNode);
        //keep old props to enable reuse when updating the component independently of it's
        //parent.
        this.oldProps = props;
        return this.render(props);
    }
    render(props) {
        return this.Component(props);
    }
}
const $d302ed7d0e97d743$var$h = (0, $6oBH7$directive)($d302ed7d0e97d743$var$$);
var $d302ed7d0e97d743$export$2e2bcd8739ae039 = $d302ed7d0e97d743$var$h;



class $80e87c3714494da7$export$2e2bcd8739ae039 {
    static createRoot(component, props) {
        //check whether or not "renderContainer" is a string and handle it
        //accordingly.
        if (typeof props.renderContainer === "string" || props.renderContainer instanceof String) props.renderContainer = document.querySelector(props.renderContainer);
        const renderComponent1 = ()=>(0, $6oBH7$render)((0, $e9d5482ee1d4bd25$re_export$html)`${(0, $d302ed7d0e97d743$export$2e2bcd8739ae039)(component, props)}`, props.renderContainer, props.renderOptions);
        //queue microtask to render the component to enable all extensions to run first.
        queueMicrotask(renderComponent1);
        //release the reference to the current store.
        (0, $33b4b724c36214e1$export$386be634f17bdf08)();
        //return "renderComponet" function to allow re-rendering of whole root
        //component tree.
        return renderComponent1;
    }
    static use(extension) {
        extension.addAdaptationMethods({
            getCurrentStore: $33b4b724c36214e1$export$9d75f3e1a7e94aee,
            getCurrentStoreId: $33b4b724c36214e1$export$9e78cbb868ddafad,
            renderComponent: $33b4b724c36214e1$export$fa7f552cb3a457a6
        });
    }
}


















function $4ad9e0251320ee8f$var$adaptation(adaptationObject) {
    const customAdaptation = {};
    customAdaptation.connect = adaptationObject.connect;
    customAdaptation.call = ()=>{
        (0, $33b4b724c36214e1$export$8952e4d023034a8d)(customAdaptation);
        const returnValue = adaptationObject.call();
        (0, $33b4b724c36214e1$export$386be634f17bdf08)();
        return returnValue;
    };
    customAdaptation.detonate = ()=>(0, $33b4b724c36214e1$export$ddf93ecef02cd077)(customAdaptation);
    return customAdaptation;
}
var $4ad9e0251320ee8f$export$2e2bcd8739ae039 = $4ad9e0251320ee8f$var$adaptation;




function $3879731263148ba4$var$commonSetStateFunctionality(effectArrayOrFunction, args, currentStoreId) {
    if (effectArrayOrFunction) {
        if (typeof effectArrayOrFunction == "function") effectArrayOrFunction(...args);
        else effectArrayOrFunction.forEach((effect)=>{
            effect === "render" || effect === "update" ? (0, $33b4b724c36214e1$export$fa7f552cb3a457a6)(currentStoreId) : effect(...args);
        });
    } else (0, $33b4b724c36214e1$export$fa7f552cb3a457a6)(currentStoreId);
}
var $3879731263148ba4$export$2e2bcd8739ae039 = $3879731263148ba4$var$commonSetStateFunctionality;


function $946a922432cd4146$var$adaptState(initialStateValue) {
    const currentStore = (0, $33b4b724c36214e1$export$9d75f3e1a7e94aee)();
    const currentStoreId = (0, $33b4b724c36214e1$export$9e78cbb868ddafad)();
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
                (0, $3879731263148ba4$export$2e2bcd8739ae039)(effectArray, args, currentStoreId);
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
var $946a922432cd4146$export$2e2bcd8739ae039 = $946a922432cd4146$var$adaptState;




function $9bb902827c16ad66$var$adaptGetState(initialStateValue) {
    const currentStore = (0, $33b4b724c36214e1$export$9d75f3e1a7e94aee)();
    const currentStoreId = (0, $33b4b724c36214e1$export$9e78cbb868ddafad)();
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
                (0, $3879731263148ba4$export$2e2bcd8739ae039)(effectArray, args, currentStoreId);
            };
            const state = [
                ()=>state[2],
                setStateFunction,
                stateValue
            ];
            currentStore.states[currentStore.currentAdaptationIds.state] = state;
        }
        return currentStore.states[currentStore.currentAdaptationIds.state++];
    } else throw new Error("adaptGetState() can only be used inside a Component or a Custom Adaptation.");
}
var $9bb902827c16ad66$export$2e2bcd8739ae039 = $9bb902827c16ad66$var$adaptGetState;



function $54cb1f81b3a5da85$var$adaptRef(initialRefValue) {
    const currentStore = (0, $33b4b724c36214e1$export$9d75f3e1a7e94aee)();
    if (currentStore && !currentStore.refs) {
        currentStore.refs = [];
        currentStore.currentAdaptationIds.ref = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.ref in currentStore.refs)) {
            let ref = {};
            ref.current = initialRefValue;
            currentStore.refs[currentStore.currentAdaptationIds.ref] = ref;
        }
        return currentStore.refs[currentStore.currentAdaptationIds.ref++];
    } else throw new Error("adaptRef() can only be used inside a Component or a Custom Adaptation.");
}
var $54cb1f81b3a5da85$export$2e2bcd8739ae039 = $54cb1f81b3a5da85$var$adaptRef;



function $3c9394d8cfe55fae$var$guardsChanged(guards1, guards2) {
    if (!guards1 || !guards2) return true;
    if (guards1.length !== guards2.length) return true;
    let guardLength = guards1.length;
    for(let i = 0; i < guardLength; i++){
        if (!(guards1[i] === guards2[i])) return true;
    }
    return false;
}
var $3c9394d8cfe55fae$export$2e2bcd8739ae039 = $3c9394d8cfe55fae$var$guardsChanged;


function $7a68737701206ad8$var$adaptEffect(fn, guards) {
    const currentStore = (0, $33b4b724c36214e1$export$9d75f3e1a7e94aee)();
    if (currentStore && !currentStore.asyncEffects) {
        currentStore.asyncEffects = [];
        currentStore.currentAdaptationIds.asyncEffect = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.asyncEffect in currentStore.asyncEffects)) currentStore.asyncEffects[currentStore.currentAdaptationIds.asyncEffect] = [];
        let asyncEffectId = currentStore.currentAdaptationIds.asyncEffect;
        let asyncEffect = currentStore.asyncEffects[asyncEffectId];
        if ((0, $3c9394d8cfe55fae$export$2e2bcd8739ae039)(asyncEffect[1], guards)) {
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
            $7a68737701206ad8$var$addAsyncEffect(asyncEffect[0]);
            asyncEffect[0] = null;
            asyncEffect[1] = guards;
        }
        currentStore.currentAdaptationIds.asyncEffect++;
    } else throw new Error("adaptEffect() can only be used inside a Component or a Custom Adaptation.");
}
const $7a68737701206ad8$var$asyncEffectAndCleanupArray1 = [];
const $7a68737701206ad8$var$asyncEffectAndCleanupArray2 = [];
let $7a68737701206ad8$var$one = true;
function $7a68737701206ad8$var$addAsyncEffect(effect1) {
    if ($7a68737701206ad8$var$one) {
        $7a68737701206ad8$var$asyncEffectAndCleanupArray1.push(effect1);
        if ($7a68737701206ad8$var$asyncEffectAndCleanupArray1.length === 1) setTimeout(()=>{
            $7a68737701206ad8$var$one = false;
            $7a68737701206ad8$var$asyncEffectAndCleanupArray1.forEach((effect)=>effect());
            $7a68737701206ad8$var$asyncEffectAndCleanupArray1.length = 0;
        });
    } else {
        $7a68737701206ad8$var$asyncEffectAndCleanupArray2.push(effect1);
        if ($7a68737701206ad8$var$asyncEffectAndCleanupArray2.length === 1) setTimeout(()=>{
            $7a68737701206ad8$var$one = true;
            $7a68737701206ad8$var$asyncEffectAndCleanupArray2.forEach((effect)=>effect());
            $7a68737701206ad8$var$asyncEffectAndCleanupArray2.length = 0;
        });
    }
}
var $7a68737701206ad8$export$2e2bcd8739ae039 = $7a68737701206ad8$var$adaptEffect;




function $7ce393bfdc3b5670$var$adaptInstantEffect(fn, guards) {
    const currentStore = (0, $33b4b724c36214e1$export$9d75f3e1a7e94aee)();
    if (currentStore && !currentStore.instantEffects) {
        currentStore.instantEffects = [];
        currentStore.currentAdaptationIds.instantEffect = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.instantEffect in currentStore.instantEffects)) currentStore.instantEffects[currentStore.currentAdaptationIds.instantEffect] = [];
        let instantEffectId = currentStore.currentAdaptationIds.instantEffect;
        let instantEffect = currentStore.instantEffects[instantEffectId];
        if ((0, $3c9394d8cfe55fae$export$2e2bcd8739ae039)(instantEffect[1], guards)) {
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
var $7ce393bfdc3b5670$export$2e2bcd8739ae039 = $7ce393bfdc3b5670$var$adaptInstantEffect;




function $be223190a014accd$var$adaptInvocationEffect(fn, guards) {
    const currentStore = (0, $33b4b724c36214e1$export$9d75f3e1a7e94aee)();
    if (currentStore && !currentStore.invocationEffects) {
        currentStore.invocationEffects = [];
        currentStore.currentAdaptationIds.invocationEffect = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.invocationEffect in currentStore.invocationEffects)) currentStore.invocationEffects[currentStore.currentAdaptationIds.invocationEffect] = [];
        let invocationEffectId = currentStore.currentAdaptationIds.invocationEffect;
        let invocationEffect = currentStore.invocationEffects[invocationEffectId];
        if ((0, $3c9394d8cfe55fae$export$2e2bcd8739ae039)(invocationEffect[1], guards)) {
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
            $be223190a014accd$var$addInvocationEffect(invocationEffectStore);
            invocationEffect[0] = null;
            invocationEffect[1] = guards;
        }
        currentStore.currentAdaptationIds.invocationEffect++;
    } else throw new Error("adaptInvocationEffect() can only be used inside a Component or a Custom Adaptation.");
}
const $be223190a014accd$var$invocationEffectArray1 = [];
const $be223190a014accd$var$invocationEffectArray2 = [];
let $be223190a014accd$var$one = true;
function $be223190a014accd$var$addInvocationEffect(effect1) {
    if ($be223190a014accd$var$one) {
        $be223190a014accd$var$invocationEffectArray1.push(effect1);
        if ($be223190a014accd$var$invocationEffectArray1.length === 1) queueMicrotask(()=>{
            $be223190a014accd$var$one = false;
            $be223190a014accd$var$invocationEffectArray1.forEach((effect)=>effect());
            $be223190a014accd$var$invocationEffectArray1.length = 0;
        });
    } else {
        $be223190a014accd$var$invocationEffectArray2.push(effect1);
        if ($be223190a014accd$var$invocationEffectArray2.length === 1) queueMicrotask(()=>{
            $be223190a014accd$var$one = true;
            $be223190a014accd$var$invocationEffectArray2.forEach((effect)=>effect());
            $be223190a014accd$var$invocationEffectArray2.length = 0;
        });
    }
}
var $be223190a014accd$export$2e2bcd8739ae039 = $be223190a014accd$var$adaptInvocationEffect;


function $0d1255e2d732fb95$export$466258458fa544eb(fn) {
    (0, $7a68737701206ad8$export$2e2bcd8739ae039)(fn, []);
}
function $0d1255e2d732fb95$export$a01e723826952f17(fn) {
    (0, $7ce393bfdc3b5670$export$2e2bcd8739ae039)(fn, []);
}
function $0d1255e2d732fb95$export$b046da93ab4b438c(fn) {
    (0, $be223190a014accd$export$2e2bcd8739ae039)(fn, []);
}







function $7a782e3e736f96b3$var$adaptMemo(fn, guards) {
    const currentStore = (0, $33b4b724c36214e1$export$9d75f3e1a7e94aee)();
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
        if ((0, $3c9394d8cfe55fae$export$2e2bcd8739ae039)(memo[1], guards)) {
            memo[0] = fn();
            memo[1] = guards;
        }
        currentStore.currentAdaptationIds.memo++;
        return memo[0];
    } else throw new Error("adaptMemo() can only be used inside a Component or a Custom Adaptation.");
}
var $7a782e3e736f96b3$export$2e2bcd8739ae039 = $7a782e3e736f96b3$var$adaptMemo;




function $8096df2e06c1ec91$var$adaptCallback(fn, inputGuards) {
    const currentStore = (0, $33b4b724c36214e1$export$9d75f3e1a7e94aee)();
    if (currentStore) return (0, $7a782e3e736f96b3$export$2e2bcd8739ae039)(()=>{
        return fn;
    }, inputGuards);
    else throw new Error("adaptCallback() can only be used inside a Component or a Custom Adaptation.");
}
var $8096df2e06c1ec91$export$2e2bcd8739ae039 = $8096df2e06c1ec91$var$adaptCallback;



function $1781985806d61cdb$var$adaptFunction(eventArrayOrFuntion, ...setupEventArgs) {
    const currentStore = (0, $33b4b724c36214e1$export$9d75f3e1a7e94aee)();
    const currentStoreId = (0, $33b4b724c36214e1$export$9e78cbb868ddafad)();
    if (currentStore && !currentStore.events) {
        currentStore.events = [];
        currentStore.currentAdaptationIds.event = 0;
    }
    if (currentStore) {
        if (!(currentStore.currentAdaptationIds.event in currentStore.events)) {
            currentStore.events[currentStore.currentAdaptationIds.event] = [];
            let event = currentStore.events[currentStore.currentAdaptationIds.event];
            event[0] = (...invocationEventArgs)=>$1781985806d61cdb$var$emitEvent(eventArrayOrFuntion, currentStoreId, event[1], invocationEventArgs);
        }
        let event = currentStore.events[currentStore.currentAdaptationIds.event];
        event[1] = setupEventArgs;
        currentStore.currentAdaptationIds.event++;
        return event[0];
    } else throw new Error("adaptFunction() can only be used inside a Component or a Custom Adaptation.");
}
function $1781985806d61cdb$var$emitEvent(eventArrayOrFuntion, currentStoreId, setupEventArgs, invocationEventArgs) {
    if (eventArrayOrFuntion) {
        if (typeof eventArrayOrFuntion == "function") eventArrayOrFuntion(...setupEventArgs, ...invocationEventArgs);
        else eventArrayOrFuntion.forEach((event)=>{
            event === "render" || event === "update" ? (0, $33b4b724c36214e1$export$fa7f552cb3a457a6)(currentStoreId) : event(...setupEventArgs, ...invocationEventArgs);
        });
    } else (0, $33b4b724c36214e1$export$fa7f552cb3a457a6)(currentStoreId);
}
var $1781985806d61cdb$export$2e2bcd8739ae039 = $1781985806d61cdb$var$adaptFunction;


var $e9d5482ee1d4bd25$export$2e2bcd8739ae039 = (0, $80e87c3714494da7$export$2e2bcd8739ae039);


export {$e9d5482ee1d4bd25$export$2e2bcd8739ae039 as default, $d302ed7d0e97d743$export$2e2bcd8739ae039 as h, $e9d5482ee1d4bd25$re_export$html as html, $e9d5482ee1d4bd25$re_export$classMap as classMap, $e9d5482ee1d4bd25$re_export$styleMap as styleMap, $e9d5482ee1d4bd25$re_export$guard as guard, $e9d5482ee1d4bd25$re_export$cache as cache, $e9d5482ee1d4bd25$re_export$repeat as repeat, $e9d5482ee1d4bd25$re_export$live as live, $e9d5482ee1d4bd25$re_export$ifDefined as ifDefined, $e9d5482ee1d4bd25$re_export$ref as ref, $e9d5482ee1d4bd25$re_export$createRef as createRef, $e9d5482ee1d4bd25$re_export$until as until, $e9d5482ee1d4bd25$re_export$asyncAppend as asyncAppend, $e9d5482ee1d4bd25$re_export$asyncReplace as asyncReplace, $33b4b724c36214e1$export$8952e4d023034a8d as adapt, $33b4b724c36214e1$export$386be634f17bdf08 as release, $33b4b724c36214e1$export$ddf93ecef02cd077 as detonate, $4ad9e0251320ee8f$export$2e2bcd8739ae039 as adaptation, $946a922432cd4146$export$2e2bcd8739ae039 as adaptState, $9bb902827c16ad66$export$2e2bcd8739ae039 as adaptGetState, $54cb1f81b3a5da85$export$2e2bcd8739ae039 as adaptRef, $0d1255e2d732fb95$export$466258458fa544eb as adaptMount, $0d1255e2d732fb95$export$a01e723826952f17 as adaptInstantMount, $0d1255e2d732fb95$export$b046da93ab4b438c as adaptInvocationMount, $7a68737701206ad8$export$2e2bcd8739ae039 as adaptEffect, $7ce393bfdc3b5670$export$2e2bcd8739ae039 as adaptInstantEffect, $be223190a014accd$export$2e2bcd8739ae039 as adaptInvocationEffect, $7a782e3e736f96b3$export$2e2bcd8739ae039 as adaptMemo, $8096df2e06c1ec91$export$2e2bcd8739ae039 as adaptCallback, $1781985806d61cdb$export$2e2bcd8739ae039 as adaptFunction};
//# sourceMappingURL=nqtui.js.map

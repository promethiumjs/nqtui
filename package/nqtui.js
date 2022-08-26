import {html as $e9d5482ee1d4bd25$re_export$html, render as $6oBH7$render, noChange as $6oBH7$noChange} from "lit-html";
import {classMap as $e9d5482ee1d4bd25$re_export$classMap} from "lit-html/directives/class-map.js";
import {styleMap as $e9d5482ee1d4bd25$re_export$styleMap} from "lit-html/directives/style-map.js";
import {when as $e9d5482ee1d4bd25$re_export$when} from "lit-html/directives/when.js";
import {choose as $e9d5482ee1d4bd25$re_export$choose} from "lit-html/directives/choose.js";
import {map as $e9d5482ee1d4bd25$re_export$map} from "lit-html/directives/map.js";
import {repeat as $e9d5482ee1d4bd25$re_export$repeat} from "lit-html/directives/repeat.js";
import {join as $e9d5482ee1d4bd25$re_export$join} from "lit-html/directives/join.js";
import {range as $e9d5482ee1d4bd25$re_export$range} from "lit-html/directives/range.js";
import {ifDefined as $e9d5482ee1d4bd25$re_export$ifDefined} from "lit-html/directives/if-defined.js";
import {cache as $e9d5482ee1d4bd25$re_export$cache} from "lit-html/directives/cache.js";
import {keyed as $e9d5482ee1d4bd25$re_export$keyed} from "lit-html/directives/keyed.js";
import {guard as $e9d5482ee1d4bd25$re_export$guard} from "lit-html/directives/guard.js";
import {live as $e9d5482ee1d4bd25$re_export$live} from "lit-html/directives/live.js";
import {ref as $e9d5482ee1d4bd25$re_export$ref, createRef as $e9d5482ee1d4bd25$re_export$createRef} from "lit-html/directives/ref.js";
import {templateContent as $e9d5482ee1d4bd25$re_export$templateContent} from "lit-html/directives/template-content.js";
import {unsafeHTML as $e9d5482ee1d4bd25$re_export$unsafeHTML} from "lit-html/directives/unsafe-html.js";
import {unsafeSVG as $e9d5482ee1d4bd25$re_export$unsafeSVG} from "lit-html/directives/unsafe-svg.js";
import {until as $e9d5482ee1d4bd25$re_export$until} from "lit-html/directives/until.js";
import {asyncAppend as $e9d5482ee1d4bd25$re_export$asyncAppend} from "lit-html/directives/async-append.js";
import {asyncReplace as $e9d5482ee1d4bd25$re_export$asyncReplace} from "lit-html/directives/async-replace.js";
import {animate as $e9d5482ee1d4bd25$re_export$animate, AnimateController as $e9d5482ee1d4bd25$re_export$AnimateController} from "@lit-labs/motion";
import {AsyncDirective as $6oBH7$AsyncDirective, directive as $6oBH7$directive} from "lit-html/async-directive.js";



const $6698c711b56a0369$var$changedArray1 = [];
const $6698c711b56a0369$var$changedArray2 = [];
let $6698c711b56a0369$var$one = true;
function $6698c711b56a0369$export$2e2bcd8739ae039(componentAsyncDirective1) {
    if ($6698c711b56a0369$var$one) {
        $6698c711b56a0369$var$changedArray1.push(componentAsyncDirective1);
        if ($6698c711b56a0369$var$changedArray1.length === 1) queueMicrotask(()=>{
            $6698c711b56a0369$var$one = false;
            $6698c711b56a0369$var$changedArray1.forEach((componentAsyncDirective)=>componentAsyncDirective.changed = true);
            $6698c711b56a0369$var$changedArray1.length = 0;
        });
    } else {
        $6698c711b56a0369$var$changedArray2.push(componentAsyncDirective1);
        if ($6698c711b56a0369$var$changedArray2.length === 1) queueMicrotask(()=>{
            $6698c711b56a0369$var$one = true;
            $6698c711b56a0369$var$changedArray2.forEach((componentAsyncDirective)=>componentAsyncDirective.changed = true);
            $6698c711b56a0369$var$changedArray2.length = 0;
        });
    }
}


const $33b4b724c36214e1$var$renderArray1 = [];
const $33b4b724c36214e1$var$renderArray2 = [];
let $33b4b724c36214e1$var$one = true;
function $33b4b724c36214e1$export$fa7f552cb3a457a6(componentAsyncDirective1, htmlTemplateResult) {
    if ($33b4b724c36214e1$var$one) {
        $33b4b724c36214e1$var$renderArray1.push(componentAsyncDirective1);
        if ($33b4b724c36214e1$var$renderArray1.length === 1) queueMicrotask(()=>{
            $33b4b724c36214e1$var$one = false;
            $33b4b724c36214e1$var$renderArray1.forEach((componentAsyncDirective)=>{
                componentAsyncDirective.setValue(htmlTemplateResult);
            });
            $33b4b724c36214e1$var$renderArray1.length = 0;
        });
    } else {
        $33b4b724c36214e1$var$renderArray2.push(componentAsyncDirective1);
        if ($33b4b724c36214e1$var$renderArray2.length === 1) queueMicrotask(()=>{
            $33b4b724c36214e1$var$one = true;
            $33b4b724c36214e1$var$renderArray2.forEach((componentAsyncDirective)=>{
                componentAsyncDirective.setValue(htmlTemplateResult);
            });
            $33b4b724c36214e1$var$renderArray2.length = 0;
        });
    }
}


function $ea1b540c76cf6f03$export$2e2bcd8739ae039(effect) {
    let cleanupNode = effect.cleanupTree;
    effect.cleanupTreeNodePointer.forEach((part)=>{
        cleanupNode = cleanupNode.get(part);
    });
    return cleanupNode;
}


function $d4c25d78057dbec5$var$traverseAndEvaluate(cleanupNode) {
    let nextChildNode = 0;
    while(cleanupNode.get(nextChildNode)){
        if (nextChildNode === 0) {
            const cleanupSet = cleanupNode.get(0);
            cleanupSet.forEach((cleanup)=>{
                cleanup();
            });
            cleanupSet.clear();
        } else {
            const nextCleanupNode = cleanupNode.get(nextChildNode);
            $d4c25d78057dbec5$var$traverseAndEvaluate(nextCleanupNode);
        }
        nextChildNode++;
    }
}
function $d4c25d78057dbec5$export$2e2bcd8739ae039(effect) {
    const cleanupNode = (0, $ea1b540c76cf6f03$export$2e2bcd8739ae039)(effect);
    $d4c25d78057dbec5$var$traverseAndEvaluate(cleanupNode);
}


function $647dcaf3efba5896$export$2e2bcd8739ae039(effect) {
    effect.observableSubscriptionSets.forEach((observableSubscriptionSet)=>{
        observableSubscriptionSet.delete(effect);
    });
    effect.observableSubscriptionSets.clear();
}



const $fcbb8a910a0afadf$export$24642de4c13f18dd = [];


function $af6bee6a6a1be209$var$implicitDependencyExecuteFn(effect, fn) {
    //to enable children effects to obtain correct positions upon recreation
    effect.childCount = 0;
    const cleanupSet = (0, $ea1b540c76cf6f03$export$2e2bcd8739ae039)(effect).get(0);
    cleanupSet.forEach((cleanup)=>{
        cleanup();
    });
    cleanupSet.clear();
    (0, $fcbb8a910a0afadf$export$24642de4c13f18dd).push(effect);
    const fnReturnValue = fn(effect.returnValue);
    const returnValueCleanup = ()=>{
        if (typeof fnReturnValue === "function") effect.returnValue = fnReturnValue();
    };
    cleanupSet.add(returnValueCleanup).add(()=>(0, $647dcaf3efba5896$export$2e2bcd8739ae039)(effect));
    (0, $fcbb8a910a0afadf$export$24642de4c13f18dd).pop();
    return ()=>(0, $d4c25d78057dbec5$export$2e2bcd8739ae039)(effect);
}
function $af6bee6a6a1be209$var$dependencyArrayExecuteFn(effect, fn, depArray, options = {}) {
    //to enable children effects to obtain correct positions upon recreation
    effect.childCount = 0;
    const cleanupSet = (0, $ea1b540c76cf6f03$export$2e2bcd8739ae039)(effect).get(0);
    cleanupSet.forEach((cleanup)=>{
        cleanup();
    });
    cleanupSet.clear();
    (0, $fcbb8a910a0afadf$export$24642de4c13f18dd).push(effect);
    effect.tracking = "implicit";
    const argsArray = depArray.map((state)=>state());
    effect.tracking = "depArray";
    if (effect.firstRun && options.defer) effect.firstRun = false;
    else {
        const fnReturnValue = fn(effect.returnValue, argsArray);
        const returnValueCleanup = ()=>{
            if (typeof fnReturnValue === "function") effect.returnValue = fnReturnValue();
        };
        cleanupSet.add(returnValueCleanup);
    }
    cleanupSet.add(()=>(0, $647dcaf3efba5896$export$2e2bcd8739ae039)(effect));
    (0, $fcbb8a910a0afadf$export$24642de4c13f18dd).pop();
    const returnExp = options.isComponent ? [
        ()=>(0, $d4c25d78057dbec5$export$2e2bcd8739ae039)(effect),
        ()=>$af6bee6a6a1be209$var$updateEffectDependencies(effect, depArray),
        argsArray, 
    ] : ()=>(0, $d4c25d78057dbec5$export$2e2bcd8739ae039)(effect);
    return returnExp;
}
//created for the purpose of component-wrapping effects
function $af6bee6a6a1be209$var$updateEffectDependencies(effect, depArray) {
    const cleanupSet = (0, $ea1b540c76cf6f03$export$2e2bcd8739ae039)(effect).get(0);
    cleanupSet.forEach((cleanup)=>{
        cleanup();
    });
    cleanupSet.clear();
    (0, $fcbb8a910a0afadf$export$24642de4c13f18dd).push(effect);
    effect.tracking = "implicit";
    const argsArray = depArray.map((state)=>state());
    effect.tracking = "depArray";
    cleanupSet.add(()=>(0, $647dcaf3efba5896$export$2e2bcd8739ae039)(effect));
    (0, $fcbb8a910a0afadf$export$24642de4c13f18dd).pop();
    return argsArray;
}
const $af6bee6a6a1be209$var$executeFns = {
    implicit: $af6bee6a6a1be209$var$implicitDependencyExecuteFn,
    depArray: $af6bee6a6a1be209$var$dependencyArrayExecuteFn
};
var $af6bee6a6a1be209$export$2e2bcd8739ae039 = $af6bee6a6a1be209$var$executeFns;


const $ca6e091ce036b3d0$var$asyncEffectAndCleanupArray1 = [];
const $ca6e091ce036b3d0$var$asyncEffectAndCleanupArray2 = [];
let $ca6e091ce036b3d0$var$one = true;
function $ca6e091ce036b3d0$export$2e2bcd8739ae039(executeFn1) {
    if ($ca6e091ce036b3d0$var$one) {
        $ca6e091ce036b3d0$var$asyncEffectAndCleanupArray1.push(executeFn1);
        if ($ca6e091ce036b3d0$var$asyncEffectAndCleanupArray1.length === 1) setTimeout(()=>{
            $ca6e091ce036b3d0$var$one = false;
            $ca6e091ce036b3d0$var$asyncEffectAndCleanupArray1.forEach((executeFn)=>executeFn());
            $ca6e091ce036b3d0$var$asyncEffectAndCleanupArray1.length = 0;
        });
    } else {
        $ca6e091ce036b3d0$var$asyncEffectAndCleanupArray2.push(executeFn1);
        if ($ca6e091ce036b3d0$var$asyncEffectAndCleanupArray2.length === 1) setTimeout(()=>{
            $ca6e091ce036b3d0$var$one = true;
            $ca6e091ce036b3d0$var$asyncEffectAndCleanupArray2.forEach((executeFn)=>executeFn());
            $ca6e091ce036b3d0$var$asyncEffectAndCleanupArray2.length = 0;
        });
    }
}


const $490bcbe1adb604d7$var$renderEffectArray1 = [];
const $490bcbe1adb604d7$var$renderEffectArray2 = [];
let $490bcbe1adb604d7$var$one = true;
function $490bcbe1adb604d7$export$2e2bcd8739ae039(executeFn1) {
    if ($490bcbe1adb604d7$var$one) {
        $490bcbe1adb604d7$var$renderEffectArray1.push(executeFn1);
        if ($490bcbe1adb604d7$var$renderEffectArray1.length === 1) queueMicrotask(()=>{
            $490bcbe1adb604d7$var$one = false;
            $490bcbe1adb604d7$var$renderEffectArray1.forEach((executeFn)=>executeFn());
            $490bcbe1adb604d7$var$renderEffectArray1.length = 0;
        });
    } else {
        $490bcbe1adb604d7$var$renderEffectArray2.push(executeFn1);
        if ($490bcbe1adb604d7$var$renderEffectArray2.length === 1) queueMicrotask(()=>{
            $490bcbe1adb604d7$var$one = true;
            $490bcbe1adb604d7$var$renderEffectArray2.forEach((executeFn)=>executeFn());
            $490bcbe1adb604d7$var$renderEffectArray2.length = 0;
        });
    }
}


function $f8fee2fbb686d5e0$export$2e2bcd8739ae039(effect, execute, fn, depArray, signal) {
    if (signal === "stale") effect.staleStateValuesCount++;
    else if (signal === "fresh") {
        effect.staleStateValuesCount--;
        if (effect.staleStateValuesCount <= 0) {
            //to make sure "effect.stateStateValuesCount" doesn't go beyond zero
            effect.staleStateValuesCount = 0;
            $f8fee2fbb686d5e0$var$executeMap[effect.type](effect, execute, fn, depArray);
        }
    }
}
const $f8fee2fbb686d5e0$var$executeMap = {
    sync: (effect, execute, fn, depArray)=>execute(effect, fn, depArray),
    async: (effect, execute, fn, depArray)=>(0, $ca6e091ce036b3d0$export$2e2bcd8739ae039)(()=>execute(effect, fn, depArray)),
    render: (effect, execute, fn, depArray)=>(0, $490bcbe1adb604d7$export$2e2bcd8739ae039)(()=>execute(effect, fn, depArray))
};



function $1737cf3808fbaf09$export$2e2bcd8739ae039(effect) {
    const parentEffect = (0, $fcbb8a910a0afadf$export$24642de4c13f18dd)[(0, $fcbb8a910a0afadf$export$24642de4c13f18dd).length - 1];
    if (parentEffect) {
        //use "position" and "level" to determine location of effect cleanup
        //in cleanup tree
        parentEffect.childCount++;
        effect.position = parentEffect.childCount;
        effect.level = parentEffect.level + 1;
        effect.cleanupTree = parentEffect.cleanupTree;
        effect.cleanupTreeNodePointer = [
            ...parentEffect.cleanupTreeNodePointer
        ];
        let effectCleanupTreeNodePointerLength = effect.cleanupTreeNodePointer.length;
        if (effectCleanupTreeNodePointerLength === effect.level) effect.cleanupTreeNodePointer[effectCleanupTreeNodePointerLength - 1] = effect.position;
        else if (effectCleanupTreeNodePointerLength < effect.level) effect.cleanupTreeNodePointer[effectCleanupTreeNodePointerLength] = effect.position;
        else if (effectCleanupTreeNodePointerLength > effect.level) {
            effect.cleanupTreeNodePointer.pop();
            effect.cleanupTreeNodePointer[effectCleanupTreeNodePointerLength - 2] = effect.position;
        }
    } else {
        effect.level = 1;
        effect.position = 1;
        effect.cleanupTreeNodePointer = [
            1
        ];
        effect.cleanupTree = new Map();
    }
}


function $7e9b891dc94e39a9$export$2e2bcd8739ae039(effect) {
    let cleanupSet = effect.cleanupTree;
    effect.cleanupTreeNodePointer.forEach((part)=>{
        if (!cleanupSet.get(part)) cleanupSet.set(part, new Map());
        cleanupSet = cleanupSet.get(part);
    });
    if (!cleanupSet.get(0)) {
        cleanupSet.set(0, new Set());
        return false;
    }
    return true;
}


function $6672f2238cd21cb1$export$2e2bcd8739ae039(fn, depArray, options) {
    const tracking = typeof depArray === "undefined" ? "implicit" : "depArray";
    const execute = (0, $af6bee6a6a1be209$export$2e2bcd8739ae039)[tracking];
    const effect = {
        firstRun: true,
        type: "sync",
        tracking: tracking,
        childCount: 0,
        position: null,
        level: null,
        cleanupTree: null,
        cleanupTreeNodePointer: null,
        observableSubscriptionSets: new Set(),
        staleStateValuesCount: 0,
        sendSignal: (signal)=>(0, $f8fee2fbb686d5e0$export$2e2bcd8739ae039)(effect, execute, fn, depArray, signal)
    };
    (0, $1737cf3808fbaf09$export$2e2bcd8739ae039)(effect);
    (0, $7e9b891dc94e39a9$export$2e2bcd8739ae039)(effect);
    return execute(effect, fn, depArray, options);
}



class $d302ed7d0e97d743$var$$ extends (0, $6oBH7$AsyncDirective) {
    constructor(part){
        super(part);
        //boolean flag to enable initialization of the component in the update method.
        this.initialization = true;
    }
    initializeComponent(Component, parent, props) {
        this.cleanups = [];
        let htmlFn;
        this.cleanups.push((0, $6672f2238cd21cb1$export$2e2bcd8739ae039)(()=>htmlFn = Component({
                parent: parent,
                props: props
            }), []));
        const [ComponentCleanup, ComponentDependencyUpdate, [htmlTemplateResult1]] = (0, $6672f2238cd21cb1$export$2e2bcd8739ae039)((_, [htmlTemplateResult])=>(0, $33b4b724c36214e1$export$fa7f552cb3a457a6)(this, htmlTemplateResult), [
            htmlFn
        ], {
            defer: true,
            isComponent: true
        });
        this.cleanups.push(ComponentCleanup);
        this.ComponentDependencyUpdate = ComponentDependencyUpdate;
        this.Component = ()=>{
            //check "changed" flag to prevent multiple redundant re-rendering of components.
            if (this.changed) {
                this.changed = false;
                (0, $6698c711b56a0369$export$2e2bcd8739ae039)(this);
                const htmlTemplateResult = this.ComponentDependencyUpdate?.();
                return htmlTemplateResult;
            } else return 0, $6oBH7$noChange;
        };
        //initialize "changed" flag as true.
        this.changed = true;
        //prevent re-initialization of component on subsequent renders after initialization.
        this.initialization = false;
        return htmlTemplateResult1;
    }
    disconnected() {
        this.cleanups.forEach((cleanup)=>cleanup());
    }
    update(part, [Component, props]) {
        //initialize component on first render
        if (this.initialization) {
            this.props = props;
            return this.initializeComponent(Component, part.parentNode, this.props);
        }
        for(const prop in props)this.props[prop] = props[prop];
        return this.render();
    }
    render() {
        return this.Component();
    }
}
const $d302ed7d0e97d743$var$h = (0, $6oBH7$directive)($d302ed7d0e97d743$var$$);
var $d302ed7d0e97d743$export$2e2bcd8739ae039 = $d302ed7d0e97d743$var$h;


class $80e87c3714494da7$export$2e2bcd8739ae039 {
    static createRoot(Component, props) {
        //check whether or not "renderContainer" is a string and handle it
        //accordingly.
        if (typeof props.renderContainer === "string" || props.renderContainer instanceof String) props.renderContainer = document.querySelector(props.renderContainer);
        const renderComponent = ()=>(0, $6oBH7$render)((0, $e9d5482ee1d4bd25$re_export$html)`${(0, $d302ed7d0e97d743$export$2e2bcd8739ae039)(Component, props)}`, props.renderContainer, props.renderOptions);
        //queue microtask to render the component to enable all extensions to run first.
        queueMicrotask(renderComponent);
        //return "renderComponet" function to allow re-rendering of whole root
        //component tree.
        return renderComponent;
    }
}





function $1213c5dc0e5edf1b$var$subscribe(state, effect) {
    const activeSubscriptions = state.activeSubscriptions;
    const type = effect.type;
    if (effect.tracking === "depArray") return;
    if (type === "async" || type === "render") {
        state.asyncAndRenderSubscriptions.add(effect);
        effect.observableSubscriptionSets.add(state.asyncAndRenderSubscriptions);
    } else {
        state[`${type}Subscriptions`][activeSubscriptions].add(effect);
        effect.observableSubscriptionSets.add(state[`${type}Subscriptions`][activeSubscriptions]);
    }
}
function $1213c5dc0e5edf1b$export$2e2bcd8739ae039(state) {
    const currentEffect = (0, $fcbb8a910a0afadf$export$24642de4c13f18dd)[(0, $fcbb8a910a0afadf$export$24642de4c13f18dd).length - 1];
    if (currentEffect) $1213c5dc0e5edf1b$var$subscribe(state, currentEffect);
    return state.value;
}


const $b5269cf3b352f2fc$var$cleanupUpdateArray = [];
function $b5269cf3b352f2fc$export$1b3c45eb1fa5da02(cleanupUpdateFn) {
    $b5269cf3b352f2fc$var$cleanupUpdateArray.push(cleanupUpdateFn);
}
function $b5269cf3b352f2fc$export$916777485b2b3993() {
    $b5269cf3b352f2fc$var$cleanupUpdateArray.forEach((cleanupUpdateFn)=>cleanupUpdateFn());
    $b5269cf3b352f2fc$var$cleanupUpdateArray.length = 0;
}


function $fd89f61bde68a313$export$ac2bda8cd89c2590(state, activeSubscriptions) {
    state.memoSubscriptions[activeSubscriptions].forEach((subscription)=>{
        subscription.sendSignal("stale");
    });
    state.syncSubscriptions[activeSubscriptions].forEach((subscription)=>{
        subscription.sendSignal("stale");
    });
    state.asyncAndRenderSubscriptions.forEach((subscription)=>{
        subscription.sendSignal("stale");
    });
}
function $fd89f61bde68a313$export$436b218e987b82fc(state, activeSubscriptions) {
    state.memoSubscriptions[activeSubscriptions].forEach((subscription)=>{
        subscription.sendSignal("fresh");
    });
    state.syncSubscriptions[activeSubscriptions].forEach((subscription)=>{
        subscription.sendSignal("fresh");
    });
    state.asyncAndRenderSubscriptions.forEach((subscription)=>{
        subscription.sendSignal("fresh");
    });
}


function $43a0129e5a9521b7$export$2e2bcd8739ae039(state, nextValue) {
    const activeSubscriptions = state.activeSubscriptions;
    state.activeSubscriptions = activeSubscriptions === "one" ? "two" : "one";
    (0, $fd89f61bde68a313$export$ac2bda8cd89c2590)(state, activeSubscriptions);
    state.value = nextValue;
    (0, $fd89f61bde68a313$export$436b218e987b82fc)(state, activeSubscriptions);
    (0, $b5269cf3b352f2fc$export$916777485b2b3993)();
}


function $8643b34629802f21$export$2e2bcd8739ae039(initialValue) {
    const state = {
        syncSubscriptions: {
            one: new Set(),
            two: new Set()
        },
        memoSubscriptions: {
            one: new Set(),
            two: new Set()
        },
        asyncAndRenderSubscriptions: new Set(),
        activeSubscriptions: "one",
        value: initialValue
    };
    return [
        ()=>(0, $1213c5dc0e5edf1b$export$2e2bcd8739ae039)(state),
        (nextValue)=>(0, $43a0129e5a9521b7$export$2e2bcd8739ae039)(state, nextValue)
    ];
}






function $f8099572391d5855$export$2e2bcd8739ae039(fn, depArray, options) {
    const tracking = typeof depArray === "undefined" ? "implicit" : "depArray";
    const execute = (0, $af6bee6a6a1be209$export$2e2bcd8739ae039)[tracking];
    const effect = {
        firstRun: true,
        type: "async",
        tracking: tracking,
        childCount: 0,
        position: null,
        level: null,
        cleanupTree: null,
        cleanupTreeNodePointer: null,
        observableSubscriptionSets: new Set(),
        staleStateValuesCount: 0,
        sendSignal: (signal)=>(0, $f8fee2fbb686d5e0$export$2e2bcd8739ae039)(effect, execute, fn, depArray, signal)
    };
    (0, $1737cf3808fbaf09$export$2e2bcd8739ae039)(effect);
    (0, $7e9b891dc94e39a9$export$2e2bcd8739ae039)(effect);
    setTimeout(()=>execute(effect, fn, depArray, options));
}






function $22e520d1cc5cf57a$export$2e2bcd8739ae039(fn, depArray, options) {
    const tracking = typeof depArray === "undefined" ? "implicit" : "depArray";
    const execute = (0, $af6bee6a6a1be209$export$2e2bcd8739ae039)[tracking];
    const effect = {
        firstRun: true,
        type: "render",
        tracking: tracking,
        childCount: 0,
        position: null,
        level: null,
        cleanupTree: null,
        cleanupTreeNodePointer: null,
        observableSubscriptionSets: new Set(),
        staleStateValuesCount: 0,
        sendSignal: (signal)=>(0, $f8fee2fbb686d5e0$export$2e2bcd8739ae039)(effect, execute, fn, depArray, signal)
    };
    (0, $1737cf3808fbaf09$export$2e2bcd8739ae039)(effect);
    (0, $7e9b891dc94e39a9$export$2e2bcd8739ae039)(effect);
    queueMicrotask(()=>execute(effect, fn, depArray, options));
}








function $80a9035b96e6d6d4$export$e5bb50160f277516(memo) {
    const activeSubscriptions = memo.activeSubscriptions;
    memo.activeSubscriptions = activeSubscriptions === "one" ? "two" : "one";
    (0, $fd89f61bde68a313$export$ac2bda8cd89c2590)(memo, activeSubscriptions);
}
function $80a9035b96e6d6d4$export$18b21b881485961f(memo, fn) {
    //to enable children effects to obtain correct positions upon recreation
    memo.childCount = 0;
    const cleanupSet = (0, $ea1b540c76cf6f03$export$2e2bcd8739ae039)(memo).get(0);
    for (const cleanup of cleanupSet){
        if (cleanup.type === "memo") return cleanup;
        cleanup();
    }
    cleanupSet.clear();
    (0, $fcbb8a910a0afadf$export$24642de4c13f18dd).push(memo);
    memo.value = fn();
    if (memo.firstRun) {
        memo.firstRun = false;
        cleanupSet.add(()=>(0, $647dcaf3efba5896$export$2e2bcd8739ae039)(memo));
    } else {
        cleanupSet.add(memo);
        (0, $b5269cf3b352f2fc$export$1b3c45eb1fa5da02)(()=>{
            cleanupSet.clear();
            cleanupSet.add(()=>(0, $647dcaf3efba5896$export$2e2bcd8739ae039)(memo));
        });
    }
    (0, $fcbb8a910a0afadf$export$24642de4c13f18dd).pop();
    const activeSubscriptions = memo.activeSubscriptions === "one" ? "two" : "one";
    (0, $fd89f61bde68a313$export$436b218e987b82fc)(memo, activeSubscriptions);
}


function $01246e38f2b54ff1$export$2e2bcd8739ae039(memo, fn, signal) {
    if (signal === "stale") {
        memo.staleStateValuesCount++;
        if (memo.staleStateValuesCount === 1) (0, $80a9035b96e6d6d4$export$e5bb50160f277516)(memo);
    } else if (signal === "fresh") {
        memo.staleStateValuesCount--;
        if (memo.staleStateValuesCount <= 0) {
            //to make sure "memo.stateStateValuesCount" doesn't go beyond zero
            memo.staleStateValuesCount = 0;
            (0, $80a9035b96e6d6d4$export$18b21b881485961f)(memo, fn);
        }
    }
}






function $8c8d00d7442872ff$export$2e2bcd8739ae039(fn) {
    const memo = {
        //state properties
        syncSubscriptions: {
            one: new Set(),
            two: new Set()
        },
        memoSubscriptions: {
            one: new Set(),
            two: new Set()
        },
        asyncAndRenderSubscriptions: new Set(),
        activeSubscriptions: "one",
        value: null,
        //effect properties
        firstRun: true,
        type: "memo",
        childCount: 0,
        position: null,
        level: null,
        cleanupTree: null,
        cleanupTreeNodePointer: null,
        observableSubscriptionSets: new Set(),
        staleStateValuesCount: 0,
        sendSignal: (signal)=>(0, $01246e38f2b54ff1$export$2e2bcd8739ae039)(memo, fn, signal)
    };
    (0, $1737cf3808fbaf09$export$2e2bcd8739ae039)(memo);
    (0, $7e9b891dc94e39a9$export$2e2bcd8739ae039)(memo);
    const cleanupMemo = (0, $80a9035b96e6d6d4$export$18b21b881485961f)(memo, fn);
    return cleanupMemo ? ()=>(0, $1213c5dc0e5edf1b$export$2e2bcd8739ae039)(cleanupMemo) : ()=>(0, $1213c5dc0e5edf1b$export$2e2bcd8739ae039)(memo);
}
























var $e9d5482ee1d4bd25$export$2e2bcd8739ae039 = (0, $80e87c3714494da7$export$2e2bcd8739ae039);


export {$e9d5482ee1d4bd25$export$2e2bcd8739ae039 as default, $d302ed7d0e97d743$export$2e2bcd8739ae039 as h, $e9d5482ee1d4bd25$re_export$html as html, $8643b34629802f21$export$2e2bcd8739ae039 as adaptState, $f8099572391d5855$export$2e2bcd8739ae039 as adaptEffect, $22e520d1cc5cf57a$export$2e2bcd8739ae039 as adaptRenderEffect, $6672f2238cd21cb1$export$2e2bcd8739ae039 as adaptSyncEffect, $8c8d00d7442872ff$export$2e2bcd8739ae039 as adaptMemo, $e9d5482ee1d4bd25$re_export$classMap as classMap, $e9d5482ee1d4bd25$re_export$styleMap as styleMap, $e9d5482ee1d4bd25$re_export$when as when, $e9d5482ee1d4bd25$re_export$choose as choose, $e9d5482ee1d4bd25$re_export$guard as guard, $e9d5482ee1d4bd25$re_export$cache as cache, $e9d5482ee1d4bd25$re_export$keyed as keyed, $e9d5482ee1d4bd25$re_export$map as map, $e9d5482ee1d4bd25$re_export$repeat as repeat, $e9d5482ee1d4bd25$re_export$join as join, $e9d5482ee1d4bd25$re_export$range as range, $e9d5482ee1d4bd25$re_export$live as live, $e9d5482ee1d4bd25$re_export$ifDefined as ifDefined, $e9d5482ee1d4bd25$re_export$ref as ref, $e9d5482ee1d4bd25$re_export$createRef as createRef, $e9d5482ee1d4bd25$re_export$templateContent as templateContent, $e9d5482ee1d4bd25$re_export$unsafeHTML as unsafeHTML, $e9d5482ee1d4bd25$re_export$unsafeSVG as unsafeSVG, $e9d5482ee1d4bd25$re_export$until as until, $e9d5482ee1d4bd25$re_export$asyncAppend as asyncAppend, $e9d5482ee1d4bd25$re_export$asyncReplace as asyncReplace, $e9d5482ee1d4bd25$re_export$animate as animate, $e9d5482ee1d4bd25$re_export$AnimateController as AnimateController};
//# sourceMappingURL=nqtui.js.map

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
import {AsyncDirective as $6oBH7$AsyncDirective, directive as $6oBH7$directive} from "lit-html/async-directive.js";



const $04eedf882f5a48d8$var$changedArray1 = [];
const $04eedf882f5a48d8$var$changedArray2 = [];
let $04eedf882f5a48d8$var$one = true;
function $04eedf882f5a48d8$export$2e2bcd8739ae039(componentAsyncDirective1) {
    if ($04eedf882f5a48d8$var$one) {
        $04eedf882f5a48d8$var$changedArray1.push(componentAsyncDirective1);
        if ($04eedf882f5a48d8$var$changedArray1.length === 1) queueMicrotask(()=>{
            $04eedf882f5a48d8$var$one = false;
            $04eedf882f5a48d8$var$changedArray1.forEach((componentAsyncDirective)=>componentAsyncDirective.changed = true);
            $04eedf882f5a48d8$var$changedArray1.length = 0;
        });
    } else {
        $04eedf882f5a48d8$var$changedArray2.push(componentAsyncDirective1);
        if ($04eedf882f5a48d8$var$changedArray2.length === 1) queueMicrotask(()=>{
            $04eedf882f5a48d8$var$one = true;
            $04eedf882f5a48d8$var$changedArray2.forEach((componentAsyncDirective)=>componentAsyncDirective.changed = true);
            $04eedf882f5a48d8$var$changedArray2.length = 0;
        });
    }
}


const $1ff481cd88aa17d5$var$renderArray1 = [];
const $1ff481cd88aa17d5$var$renderArray2 = [];
let $1ff481cd88aa17d5$var$one = true;
function $1ff481cd88aa17d5$export$fa7f552cb3a457a6(componentAsyncDirective1, htmlTemplateResult) {
    if ($1ff481cd88aa17d5$var$one) {
        $1ff481cd88aa17d5$var$renderArray1.push(componentAsyncDirective1);
        if ($1ff481cd88aa17d5$var$renderArray1.length === 1) queueMicrotask(()=>{
            $1ff481cd88aa17d5$var$one = false;
            $1ff481cd88aa17d5$var$renderArray1.forEach((componentAsyncDirective)=>{
                componentAsyncDirective.setValue(htmlTemplateResult);
            });
            $1ff481cd88aa17d5$var$renderArray1.length = 0;
        });
    } else {
        $1ff481cd88aa17d5$var$renderArray2.push(componentAsyncDirective1);
        if ($1ff481cd88aa17d5$var$renderArray2.length === 1) queueMicrotask(()=>{
            $1ff481cd88aa17d5$var$one = true;
            $1ff481cd88aa17d5$var$renderArray2.forEach((componentAsyncDirective)=>{
                componentAsyncDirective.setValue(htmlTemplateResult);
            });
            $1ff481cd88aa17d5$var$renderArray2.length = 0;
        });
    }
}


function $4e1accf2a3fa4a57$export$2e2bcd8739ae039(effect) {
    let cleanupNode = effect.cleanupTree;
    effect.cleanupTreeNodePointer.forEach((part)=>{
        cleanupNode = cleanupNode.get(part);
    });
    return cleanupNode;
}


function $33e3bca08184b88c$var$traverseAndEvaluate(cleanupNode) {
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
            $33e3bca08184b88c$var$traverseAndEvaluate(nextCleanupNode);
        }
        nextChildNode++;
    }
}
function $33e3bca08184b88c$export$2e2bcd8739ae039(effect) {
    const cleanupNode = (0, $4e1accf2a3fa4a57$export$2e2bcd8739ae039)(effect);
    $33e3bca08184b88c$var$traverseAndEvaluate(cleanupNode);
}


function $191ea01d20b057a5$export$2e2bcd8739ae039(effect) {
    effect.observableSubscriptionSets.forEach((observableSubscriptionSet)=>{
        observableSubscriptionSet.delete(effect);
    });
    effect.observableSubscriptionSets.clear();
}



const $cf23c9ad92c46644$export$24642de4c13f18dd = [];


function $ceea39f99f315fb7$var$implicitDependencyExecuteFn(effect, fn) {
    //to enable children effects to obtain correct positions upon recreation
    effect.childCount = 0;
    const cleanupSet = (0, $4e1accf2a3fa4a57$export$2e2bcd8739ae039)(effect).get(0);
    cleanupSet.forEach((cleanup)=>{
        cleanup();
    });
    cleanupSet.clear();
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).push(effect);
    const fnReturnValue = fn(effect.returnValue);
    const returnValueCleanup = ()=>{
        if (typeof fnReturnValue === "function") effect.returnValue = fnReturnValue();
    };
    cleanupSet.add(returnValueCleanup).add(()=>(0, $191ea01d20b057a5$export$2e2bcd8739ae039)(effect));
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).pop();
    return ()=>(0, $33e3bca08184b88c$export$2e2bcd8739ae039)(effect);
}
function $ceea39f99f315fb7$var$dependencyArrayExecuteFn(effect, fn, depArray, options = {}) {
    //to enable children effects to obtain correct positions upon recreation
    effect.childCount = 0;
    const cleanupSet = (0, $4e1accf2a3fa4a57$export$2e2bcd8739ae039)(effect).get(0);
    cleanupSet.forEach((cleanup)=>{
        cleanup();
    });
    cleanupSet.clear();
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).push(effect);
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
    cleanupSet.add(()=>(0, $191ea01d20b057a5$export$2e2bcd8739ae039)(effect));
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).pop();
    const returnExp = options.isComponent ? [
        ()=>(0, $33e3bca08184b88c$export$2e2bcd8739ae039)(effect),
        ()=>$ceea39f99f315fb7$var$updateEffectDependencies(effect, depArray),
        argsArray, 
    ] : ()=>(0, $33e3bca08184b88c$export$2e2bcd8739ae039)(effect);
    return returnExp;
}
//created for the purpose of component-wrapping effects
function $ceea39f99f315fb7$var$updateEffectDependencies(effect, depArray) {
    const cleanupSet = (0, $4e1accf2a3fa4a57$export$2e2bcd8739ae039)(effect).get(0);
    cleanupSet.forEach((cleanup)=>{
        cleanup();
    });
    cleanupSet.clear();
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).push(effect);
    effect.tracking = "implicit";
    const argsArray = depArray.map((state)=>state());
    effect.tracking = "depArray";
    cleanupSet.add(()=>(0, $191ea01d20b057a5$export$2e2bcd8739ae039)(effect));
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).pop();
    return argsArray;
}
const $ceea39f99f315fb7$var$executeFns = {
    implicit: $ceea39f99f315fb7$var$implicitDependencyExecuteFn,
    depArray: $ceea39f99f315fb7$var$dependencyArrayExecuteFn
};
var $ceea39f99f315fb7$export$2e2bcd8739ae039 = $ceea39f99f315fb7$var$executeFns;


const $0728fecdbf281315$var$asyncEffectAndCleanupArray1 = [];
const $0728fecdbf281315$var$asyncEffectAndCleanupArray2 = [];
let $0728fecdbf281315$var$one = true;
function $0728fecdbf281315$export$2e2bcd8739ae039(executeFn1) {
    if ($0728fecdbf281315$var$one) {
        $0728fecdbf281315$var$asyncEffectAndCleanupArray1.push(executeFn1);
        if ($0728fecdbf281315$var$asyncEffectAndCleanupArray1.length === 1) setTimeout(()=>{
            $0728fecdbf281315$var$one = false;
            $0728fecdbf281315$var$asyncEffectAndCleanupArray1.forEach((executeFn)=>executeFn());
            $0728fecdbf281315$var$asyncEffectAndCleanupArray1.length = 0;
        });
    } else {
        $0728fecdbf281315$var$asyncEffectAndCleanupArray2.push(executeFn1);
        if ($0728fecdbf281315$var$asyncEffectAndCleanupArray2.length === 1) setTimeout(()=>{
            $0728fecdbf281315$var$one = true;
            $0728fecdbf281315$var$asyncEffectAndCleanupArray2.forEach((executeFn)=>executeFn());
            $0728fecdbf281315$var$asyncEffectAndCleanupArray2.length = 0;
        });
    }
}


const $f0832425b32a585f$var$renderEffectArray1 = [];
const $f0832425b32a585f$var$renderEffectArray2 = [];
let $f0832425b32a585f$var$one = true;
function $f0832425b32a585f$export$2e2bcd8739ae039(executeFn1) {
    if ($f0832425b32a585f$var$one) {
        $f0832425b32a585f$var$renderEffectArray1.push(executeFn1);
        if ($f0832425b32a585f$var$renderEffectArray1.length === 1) queueMicrotask(()=>{
            $f0832425b32a585f$var$one = false;
            $f0832425b32a585f$var$renderEffectArray1.forEach((executeFn)=>executeFn());
            $f0832425b32a585f$var$renderEffectArray1.length = 0;
        });
    } else {
        $f0832425b32a585f$var$renderEffectArray2.push(executeFn1);
        if ($f0832425b32a585f$var$renderEffectArray2.length === 1) queueMicrotask(()=>{
            $f0832425b32a585f$var$one = true;
            $f0832425b32a585f$var$renderEffectArray2.forEach((executeFn)=>executeFn());
            $f0832425b32a585f$var$renderEffectArray2.length = 0;
        });
    }
}


function $6d9dc4dd8bec4bc7$export$2e2bcd8739ae039(effect, execute, fn, depArray, signal) {
    if (signal === "stale") effect.staleStateValuesCount++;
    else if (signal === "fresh") {
        effect.staleStateValuesCount--;
        if (effect.staleStateValuesCount <= 0) {
            //to make sure "effect.stateStateValuesCount" doesn't go beyond zero
            effect.staleStateValuesCount = 0;
            $6d9dc4dd8bec4bc7$var$executeMap[effect.type](effect, execute, fn, depArray);
        }
    }
}
const $6d9dc4dd8bec4bc7$var$executeMap = {
    sync: (effect, execute, fn, depArray)=>execute(effect, fn, depArray),
    async: (effect, execute, fn, depArray)=>(0, $0728fecdbf281315$export$2e2bcd8739ae039)(()=>execute(effect, fn, depArray)),
    render: (effect, execute, fn, depArray)=>(0, $f0832425b32a585f$export$2e2bcd8739ae039)(()=>execute(effect, fn, depArray))
};



function $6a3ab3c6cee3c885$export$2e2bcd8739ae039(effect) {
    const parentEffect = (0, $cf23c9ad92c46644$export$24642de4c13f18dd)[(0, $cf23c9ad92c46644$export$24642de4c13f18dd).length - 1];
    if (parentEffect) {
        //use "position" and "level" to determine location of effect cleanup
        //in cleanup tree
        //increment the parent effect's child count to account for its new child effect
        parentEffect.childCount++;
        //the effect's position "n" shows that it's the "nth" child of its parent effect
        effect.position = parentEffect.childCount;
        //the effect's level shows how many levels deep it is nested (one level deeper than its parent effect)
        effect.level = parentEffect.level + 1;
        //all effects in a tree have the same cleanup tree
        effect.cleanupTree = parentEffect.cleanupTree;
        //copy parent's `cleanupTreeNodePointer` and continue from there
        effect.cleanupTreeNodePointer = [
            ...parentEffect.cleanupTreeNodePointer
        ];
        //complete `cleanupTreeNodePointer` for the effect
        //every number's presence in the array represents an extra level of nesting (eg. one number for the first
        //and topmost level, three numbers for two levels deeper than the topmost level, etc)
        //the value "n" of every number in the array shows that the effect is the "nth" effect in that level of nesting
        let effectCleanupTreeNodePointerLength = effect.cleanupTreeNodePointer.length;
        if (effectCleanupTreeNodePointerLength === effect.level) effect.cleanupTreeNodePointer[effectCleanupTreeNodePointerLength - 1] = effect.position;
        else if (effectCleanupTreeNodePointerLength < effect.level) effect.cleanupTreeNodePointer[effectCleanupTreeNodePointerLength] = effect.position;
        else if (effectCleanupTreeNodePointerLength > effect.level) {
            effect.cleanupTreeNodePointer.pop();
            effect.cleanupTreeNodePointer[effectCleanupTreeNodePointerLength - 2] = effect.position;
        }
    } else {
        //do this for the topmost parent effect of the tree
        effect.level = 1;
        effect.position = 1;
        effect.cleanupTreeNodePointer = [
            1
        ];
        effect.cleanupTree = new Map();
    }
}


function $4e86dcede83c4655$export$2e2bcd8739ae039(effect) {
    //create variable to store `cleanupMap` of effect and initially set the variable to the cleanup tree
    let cleanupMap = effect.cleanupTree;
    //extract the `cleanupMap` from the `cleanupTree` and set it to the `cleanupMap` variable
    effect.cleanupTreeNodePointer.forEach((part)=>{
        if (!cleanupMap.get(part)) cleanupMap.set(part, new Map());
        cleanupMap = cleanupMap.get(part);
    });
    //set cleanup set for effect if it doesn't already exist in the cleanup map
    if (!cleanupMap.get(0)) cleanupMap.set(0, new Set());
}


function $3d1734ecfb3ab0e5$export$2e2bcd8739ae039(type, fn, depArray) {
    //determined if the effect is tracked by the state it uses implicitly, or using the
    //state provided by its dependency array
    const tracking = typeof depArray === "undefined" ? "implicit" : "depArray";
    const execute = (0, $ceea39f99f315fb7$export$2e2bcd8739ae039)[tracking];
    const effect = {
        //whether or not the effect hasn't been ran before
        firstRun: true,
        type: //whether the effect is async, sync or a render effect
        type,
        tracking: //how the effect is tracked (refer to the `tracking` variable above)
        tracking,
        //how many children the effect has
        childCount: 0,
        //the number "n" that shows that the effect is the "nth" child of its parent effect
        position: null,
        //how deeply nested the effect is (starting from level one)
        level: null,
        //tree-like map data structure that contains the cleanups for every effect in the effect tree
        cleanupTree: null,
        //array of digits that point to the effect's cleanup in the effect tree's cleanup tree
        cleanupTreeNodePointer: null,
        //subscription sets (async, sync, render, or memo) of every state currently tracking this effect
        observableSubscriptionSets: new Set(),
        //used to track the number of state values of states currently tracking the effect that are stale
        staleStateValuesCount: 0,
        //used to notify the effect when a state value of state currently tracking the effect turns
        //stale or freshens up after turning stale
        sendSignal: (signal)=>(0, $6d9dc4dd8bec4bc7$export$2e2bcd8739ae039)(effect, execute, fn, depArray, signal)
    };
    (0, $6a3ab3c6cee3c885$export$2e2bcd8739ae039)(effect);
    (0, $4e86dcede83c4655$export$2e2bcd8739ae039)(effect);
    return [
        execute,
        effect
    ];
}


function $dd1a9c42706c6616$export$2e2bcd8739ae039(fn, depArray, options) {
    const [execute, effect] = (0, $3d1734ecfb3ab0e5$export$2e2bcd8739ae039)("sync", fn, depArray);
    //sync effects are able to return cleanup functions due to their synchronous nature
    return execute(effect, fn, depArray, options);
}




class $d7efe1102037d5ee$var$$ extends (0, $6oBH7$AsyncDirective) {
    constructor(partInfo){
        super(partInfo);
        //boolean flag to enable initialization of the component in the update method.
        this.initialization = true;
    }
    initializeComponent(Component1, parent, props) {
        this.cleanups = [];
        let htmlFn;
        this.cleanups.push((0, $dd1a9c42706c6616$export$2e2bcd8739ae039)(()=>htmlFn = Component1(props, parent), []));
        const [ComponentCleanup, ComponentDependencyUpdate, [htmlTemplateResult1]] = (0, $dd1a9c42706c6616$export$2e2bcd8739ae039)((_, [htmlTemplateResult])=>(0, $1ff481cd88aa17d5$export$fa7f552cb3a457a6)(this, htmlTemplateResult), [
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
                (0, $04eedf882f5a48d8$export$2e2bcd8739ae039)(this);
                const [htmlTemplateResult] = this.ComponentDependencyUpdate?.();
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
    update(part, [Component2, props]) {
        //initialize component on first render
        if (this.initialization) {
            this.props = props;
            return this.initializeComponent(Component2, part.parentNode, this.props);
        }
        for(const prop in props)this.props[prop] = props[prop];
        return this.render();
    }
    render() {
        return this.Component();
    }
}
const $d7efe1102037d5ee$var$h = (0, $6oBH7$directive)($d7efe1102037d5ee$var$$);
var $d7efe1102037d5ee$export$2e2bcd8739ae039 = $d7efe1102037d5ee$var$h;


function $1c5c150b251a91b3$export$b3890eb0ae9dca99(Component, props) {
    //check whether or not "renderContainer" is a string and handle it
    //accordingly.
    if (typeof props.renderContainer === "string" || props.renderContainer instanceof String) props.renderContainer = document.querySelector(props.renderContainer);
    const renderComponent = ()=>(0, $6oBH7$render)((0, $e9d5482ee1d4bd25$re_export$html)`${(0, $d7efe1102037d5ee$export$2e2bcd8739ae039)(Component, props)}`, props.renderContainer, props.renderOptions);
    //queue microtask to render the component to enable all extensions to run first.
    queueMicrotask(renderComponent);
    //return "renderComponent" function to allow re-rendering of whole root
    //component tree.
    return renderComponent;
}





function $9d20ac7279a1c812$var$subscribe(state, effect) {
    //get active subscriptions to properly manage sync effects and memos
    const activeSubscriptions = state.activeSubscriptions;
    const type = effect.type;
    //if `effect.tracking` is equal to "depArray", don't track effects because the tracking
    //will be done explicitly using the provided dependency array
    if (effect.tracking === "depArray") return;
    //track effects using the right subscription sets, based on whether they are async, render,
    //sync effects, or memos
    if (type === "async" || type === "render") {
        //tracking async and render effects
        state.asyncAndRenderSubscriptions.add(effect);
        effect.observableSubscriptionSets.add(state.asyncAndRenderSubscriptions);
    } else {
        //tracking sync effects and memos
        state[`${type}Subscriptions`][activeSubscriptions].add(effect);
        effect.observableSubscriptionSets.add(state[`${type}Subscriptions`][activeSubscriptions]);
    }
}
function $9d20ac7279a1c812$export$2e2bcd8739ae039(state) {
    const currentEffect = (0, $cf23c9ad92c46644$export$24642de4c13f18dd)[(0, $cf23c9ad92c46644$export$24642de4c13f18dd).length - 1];
    if (currentEffect) $9d20ac7279a1c812$var$subscribe(state, currentEffect);
    return state.value;
}


const $07cf289615170a3d$var$cleanupUpdateArray = [];
function $07cf289615170a3d$export$1b3c45eb1fa5da02(cleanupUpdateFn) {
    $07cf289615170a3d$var$cleanupUpdateArray.push(cleanupUpdateFn);
}
function $07cf289615170a3d$export$916777485b2b3993() {
    $07cf289615170a3d$var$cleanupUpdateArray.forEach((cleanupUpdateFn)=>cleanupUpdateFn());
    $07cf289615170a3d$var$cleanupUpdateArray.length = 0;
}


function $6dc9040d05697a8e$export$ac2bda8cd89c2590(state, activeSubscriptions) {
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
function $6dc9040d05697a8e$export$436b218e987b82fc(state, activeSubscriptions) {
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


function $9c8b7ccddd7561d1$export$2e2bcd8739ae039(state, nextValue) {
    //get active subscriptions to properly manange sync effects and memos
    const activeSubscriptions = state.activeSubscriptions;
    state.activeSubscriptions = activeSubscriptions === "one" ? "two" : "one";
    //let subscriptions know that they have a stale value so that they can notify their
    //subscriptions if any
    (0, $6dc9040d05697a8e$export$ac2bda8cd89c2590)(state, activeSubscriptions);
    //update state value
    state.value = nextValue;
    //let subscriptions know that their stale value has been updated so that they can notify and
    //update themselves and their subscriptions if any
    (0, $6dc9040d05697a8e$export$436b218e987b82fc)(state, activeSubscriptions);
    //functionality required to ensure that memos are fired right and at the right time in some edge cases
    (0, $07cf289615170a3d$export$916777485b2b3993)();
}


function $9873fc45146bd570$export$2e2bcd8739ae039(initialValue) {
    //create state object with three sets of subscriptions
    const state = {
        //one for sync effect subscriptions
        //use two sets to effectively manage synchronous subscriptions (prevents recursive filling
        //and running of effects resulting in stack overflow)
        syncSubscriptions: {
            one: new Set(),
            two: new Set()
        },
        //one for memo subscriptions
        //use two sets to effectively manage synchronous subscriptions (prevents recursive filling
        //and running of memos resulting in stack overflow)
        memoSubscriptions: {
            one: new Set(),
            two: new Set()
        },
        //one for async and render effect subscriptions
        //one set is enough to manage asynchronous effects
        asyncAndRenderSubscriptions: new Set(),
        //use variable to effectively switch between subscription sets (for sync effects and memos)
        activeSubscriptions: "one",
        value: initialValue
    };
    const getter = ()=>(0, $9d20ac7279a1c812$export$2e2bcd8739ae039)(state);
    const setter = (nextValue)=>(0, $9c8b7ccddd7561d1$export$2e2bcd8739ae039)(state, nextValue);
    return [
        getter,
        setter
    ];
}



function $280590d7df928610$export$2e2bcd8739ae039(fn, depArray, options) {
    const [execute, effect] = (0, $3d1734ecfb3ab0e5$export$2e2bcd8739ae039)("async", fn, depArray);
    //execute effect asynchronously before next screen paint
    setTimeout(()=>execute(effect, fn, depArray, options));
}



function $c81bb8edf610f60a$export$2e2bcd8739ae039(fn, depArray, options) {
    const [execute, effect] = (0, $3d1734ecfb3ab0e5$export$2e2bcd8739ae039)("render", fn, depArray);
    //execute effect asynchronously after next screen paint
    queueMicrotask(()=>execute(effect, fn, depArray, options));
}








function $167a1cc90c461710$export$e5bb50160f277516(memo) {
    const activeSubscriptions = memo.activeSubscriptions;
    memo.activeSubscriptions = activeSubscriptions === "one" ? "two" : "one";
    (0, $6dc9040d05697a8e$export$ac2bda8cd89c2590)(memo, activeSubscriptions);
}
function $167a1cc90c461710$export$18b21b881485961f(memo, fn) {
    //to enable children effects to obtain correct positions upon recreation
    memo.childCount = 0;
    const cleanupSet = (0, $4e1accf2a3fa4a57$export$2e2bcd8739ae039)(memo).get(0);
    for (const cleanup of cleanupSet){
        if (cleanup.type === "memo") return cleanup;
        cleanup();
    }
    cleanupSet.clear();
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).push(memo);
    memo.value = fn();
    if (memo.firstRun) {
        memo.firstRun = false;
        cleanupSet.add(()=>(0, $191ea01d20b057a5$export$2e2bcd8739ae039)(memo));
    } else {
        cleanupSet.add(memo);
        (0, $07cf289615170a3d$export$1b3c45eb1fa5da02)(()=>{
            cleanupSet.clear();
            cleanupSet.add(()=>(0, $191ea01d20b057a5$export$2e2bcd8739ae039)(memo));
        });
    }
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).pop();
    const activeSubscriptions = memo.activeSubscriptions === "one" ? "two" : "one";
    (0, $6dc9040d05697a8e$export$436b218e987b82fc)(memo, activeSubscriptions);
}


function $64145f8d91f795da$export$2e2bcd8739ae039(memo, fn, signal) {
    if (signal === "stale") {
        memo.staleStateValuesCount++;
        if (memo.staleStateValuesCount === 1) (0, $167a1cc90c461710$export$e5bb50160f277516)(memo);
    } else if (signal === "fresh") {
        memo.staleStateValuesCount--;
        if (memo.staleStateValuesCount <= 0) {
            //to make sure "memo.stateStateValuesCount" doesn't go beyond zero
            memo.staleStateValuesCount = 0;
            (0, $167a1cc90c461710$export$18b21b881485961f)(memo, fn);
        }
    }
}






function $d400ce482ec28a34$export$2e2bcd8739ae039(fn) {
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
        sendSignal: (signal)=>(0, $64145f8d91f795da$export$2e2bcd8739ae039)(memo, fn, signal)
    };
    (0, $6a3ab3c6cee3c885$export$2e2bcd8739ae039)(memo);
    (0, $4e86dcede83c4655$export$2e2bcd8739ae039)(memo);
    const cleanupMemo = (0, $167a1cc90c461710$export$18b21b881485961f)(memo, fn);
    return cleanupMemo ? ()=>(0, $9d20ac7279a1c812$export$2e2bcd8739ae039)(cleanupMemo) : ()=>(0, $9d20ac7279a1c812$export$2e2bcd8739ae039)(memo);
}

























export {$1c5c150b251a91b3$export$b3890eb0ae9dca99 as render, $d7efe1102037d5ee$export$2e2bcd8739ae039 as h, $e9d5482ee1d4bd25$re_export$html as html, $9873fc45146bd570$export$2e2bcd8739ae039 as adaptState, $280590d7df928610$export$2e2bcd8739ae039 as adaptEffect, $c81bb8edf610f60a$export$2e2bcd8739ae039 as adaptRenderEffect, $dd1a9c42706c6616$export$2e2bcd8739ae039 as adaptSyncEffect, $d400ce482ec28a34$export$2e2bcd8739ae039 as adaptMemo, $e9d5482ee1d4bd25$re_export$classMap as classMap, $e9d5482ee1d4bd25$re_export$styleMap as styleMap, $e9d5482ee1d4bd25$re_export$when as when, $e9d5482ee1d4bd25$re_export$choose as choose, $e9d5482ee1d4bd25$re_export$guard as guard, $e9d5482ee1d4bd25$re_export$cache as cache, $e9d5482ee1d4bd25$re_export$keyed as keyed, $e9d5482ee1d4bd25$re_export$map as map, $e9d5482ee1d4bd25$re_export$repeat as repeat, $e9d5482ee1d4bd25$re_export$join as join, $e9d5482ee1d4bd25$re_export$range as range, $e9d5482ee1d4bd25$re_export$live as live, $e9d5482ee1d4bd25$re_export$ifDefined as ifDefined, $e9d5482ee1d4bd25$re_export$ref as ref, $e9d5482ee1d4bd25$re_export$createRef as createRef, $e9d5482ee1d4bd25$re_export$templateContent as templateContent, $e9d5482ee1d4bd25$re_export$unsafeHTML as unsafeHTML, $e9d5482ee1d4bd25$re_export$unsafeSVG as unsafeSVG, $e9d5482ee1d4bd25$re_export$until as until, $e9d5482ee1d4bd25$re_export$asyncAppend as asyncAppend, $e9d5482ee1d4bd25$re_export$asyncReplace as asyncReplace};
//# sourceMappingURL=nqtui.js.map

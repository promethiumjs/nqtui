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
import {when as $e9d5482ee1d4bd25$re_export$when} from "lit-html/directives/when.js";
import {choose as $e9d5482ee1d4bd25$re_export$choose} from "lit-html/directives/choose.js";
import {map as $e9d5482ee1d4bd25$re_export$map} from "lit-html/directives/map.js";
import {join as $e9d5482ee1d4bd25$re_export$join} from "lit-html/directives/join.js";
import {range as $e9d5482ee1d4bd25$re_export$range} from "lit-html/directives/range.js";
import {keyed as $e9d5482ee1d4bd25$re_export$keyed} from "lit-html/directives/keyed.js";
import {templateContent as $e9d5482ee1d4bd25$re_export$templateContent} from "lit-html/directives/template-content.js";
import {unsafeHTML as $e9d5482ee1d4bd25$re_export$unsafeHTML} from "lit-html/directives/unsafe-html.js";
import {unsafeSVG as $e9d5482ee1d4bd25$re_export$unsafeSVG} from "lit-html/directives/unsafe-svg.js";
import {AsyncDirective as $6oBH7$AsyncDirective, directive as $6oBH7$directive} from "lit-html/async-directive.js";



const $04eedf882f5a48d8$var$changedArray1 = [];
const $04eedf882f5a48d8$var$changedArray2 = [];
let $04eedf882f5a48d8$var$one = true;
function $04eedf882f5a48d8$export$2e2bcd8739ae039(componentAsyncDirective1) {
    const changedArray = $04eedf882f5a48d8$var$one ? $04eedf882f5a48d8$var$changedArray1 : $04eedf882f5a48d8$var$changedArray2;
    const newOne = $04eedf882f5a48d8$var$one ? false : true;
    changedArray.push(componentAsyncDirective1);
    if (changedArray.length === 1) queueMicrotask(()=>{
        $04eedf882f5a48d8$var$one = newOne;
        changedArray.forEach((componentAsyncDirective)=>componentAsyncDirective.changed = true);
        changedArray.length = 0;
    });
}


const $cf23c9ad92c46644$export$24642de4c13f18dd = [];


function $4e1accf2a3fa4a57$export$2e2bcd8739ae039(effect) {
    let cleanupNode = effect.cleanupTree;
    effect.cleanupTreeNodePointer.forEach((part)=>{
        cleanupNode = cleanupNode.get(part);
    });
    return cleanupNode;
}


function $191ea01d20b057a5$export$2e2bcd8739ae039(effect) {
    effect.observableSubscriptionSets.forEach((observableSubscriptionSet)=>{
        observableSubscriptionSet.delete(effect);
    });
    effect.observableSubscriptionSets.clear();
}


function $403c411949f9c70b$export$52109d3cb696f898(effect, fn) {
    //set `childCount` back to zero to enable children effects to obtain correct positions upon recreation
    effect.childCount = 0;
    //fire cleanups make sure proceedings go smoothly
    const cleanupSet = (0, $4e1accf2a3fa4a57$export$2e2bcd8739ae039)(effect).get(0);
    cleanupSet.forEach((cleanup)=>{
        cleanup();
    });
    cleanupSet.clear();
    //push effect onto context to enable tracking by state and memos
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).push(effect);
    fn(cleanupSet);
    //add cleanup to remove effect from all old subscriptions
    cleanupSet.add(()=>(0, $191ea01d20b057a5$export$2e2bcd8739ae039)(effect));
    //remove effect from context to disable tracking by state and memos
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).pop();
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


function $44d84749cfb99c59$export$2e2bcd8739ae039(effect, fn) {
    (0, $403c411949f9c70b$export$52109d3cb696f898)(effect, (cleanupSet)=>$44d84749cfb99c59$var$internalFn(effect, fn, cleanupSet));
    //return cleanup function for effect and its descendants
    return ()=>(0, $33e3bca08184b88c$export$2e2bcd8739ae039)(effect);
}
function $44d84749cfb99c59$var$internalFn(effect, fn, cleanupSet) {
    //call effect with previous return value
    const fnReturnValue = fn(effect.returnValue);
    //create `returnValueCleanup` to be called on next run of effect
    const returnValueCleanup = ()=>{
        if (typeof fnReturnValue === "function") //extract new `returnValue` from effect's returned function
        effect.returnValue = fnReturnValue();
    };
    cleanupSet.add(returnValueCleanup);
}




function $0f0c8a83c8f2e064$export$b43a9f030091b83d(effect, fn, depArray, options = {}) {
    (0, $403c411949f9c70b$export$52109d3cb696f898)(effect, (cleanupSet)=>$0f0c8a83c8f2e064$var$internalFn(effect, fn, depArray, options, cleanupSet));
    return ()=>(0, $33e3bca08184b88c$export$2e2bcd8739ae039)(effect);
}
function $0f0c8a83c8f2e064$var$internalFn(effect, fn, depArray, options = {}, cleanupSet) {
    //if effect is supposed to be deferred, do nothing on the first run
    if (effect.firstRun && options.defer) effect.firstRun = false;
    else {
        //call effect with previous return value and previous state values of tracking state and memos in an `argsArray`
        const fnReturnValue = fn(effect.returnValue, effect.argsArray || []);
        //create `returnValueCleanup` to be called on next run of effect
        const returnValueCleanup = ()=>{
            if (typeof fnReturnValue === "function") //extract new `returnValue` from effect's returned function
            effect.returnValue = fnReturnValue();
        };
        //add cleanup to obtain new return value
        cleanupSet.add(returnValueCleanup);
    }
    //set tracking to "implicit" to enable tracking by state and memos in `depArray`
    effect.tracking = "implicit";
    effect.argsArray = depArray.map((state)=>state());
    //set tracking back to "depArray" to disable other forms of implicit tracking
    //(only allow state and memos in `depArray` to track effect)
    effect.tracking = "depArray";
}





function $574a7d8879eadbab$export$2e2bcd8739ae039(effect, depArray) {
    (0, $403c411949f9c70b$export$52109d3cb696f898)(effect, ()=>$574a7d8879eadbab$var$internalFn(effect, depArray));
    return effect.argsArray;
}
function $574a7d8879eadbab$var$internalFn(effect, depArray) {
    effect.tracking = "implicit";
    effect.argsArray = depArray.map((state)=>state());
    effect.tracking = "depArray";
}


function $30a41fdbfe66e9a8$export$9a2f3fcb7b180ad7(effect, fn, depArray, options = {}) {
    (0, $403c411949f9c70b$export$52109d3cb696f898)(effect, (cleanupSet)=>$30a41fdbfe66e9a8$export$2e2bcd8739ae039(effect, fn, depArray, options, cleanupSet));
    return [
        ()=>(0, $33e3bca08184b88c$export$2e2bcd8739ae039)(effect),
        ()=>(0, $574a7d8879eadbab$export$2e2bcd8739ae039)(effect, depArray),
        effect.argsArray, 
    ];
}
function $30a41fdbfe66e9a8$export$2e2bcd8739ae039(effect, fn, depArray, options = {}, cleanupSet) {
    //set tracking to "implicit" to enable tracking by state and memos in `depArray`
    effect.tracking = "implicit";
    effect.argsArray = depArray.map((state)=>state());
    //set tracking back to "depArray" to disable other forms of implicit tracking
    //(only allow state and memos in `depArray` to track effect)
    effect.tracking = "depArray";
    //if effect is supposed to be deferred, do nothing on the first run
    if (effect.firstRun && options.defer) effect.firstRun = false;
    else {
        //call effect with previous return value and previous state values of tracking state and memos in an `argsArray`
        const fnReturnValue = fn(effect.returnValue, effect.argsArray);
        //create `returnValueCleanup` to be called on next run of effect
        const returnValueCleanup = ()=>{
            if (typeof fnReturnValue === "function") //extract new `returnValue` from effect's returned function
            effect.returnValue = fnReturnValue();
        };
        //add cleanup to obtain new return value
        cleanupSet.add(returnValueCleanup);
    }
}


const $ceea39f99f315fb7$var$executeFns = {
    implicit: (0, $44d84749cfb99c59$export$2e2bcd8739ae039),
    depArray: (0, $0f0c8a83c8f2e064$export$b43a9f030091b83d),
    componentFn: (0, $30a41fdbfe66e9a8$export$9a2f3fcb7b180ad7)
};
var $ceea39f99f315fb7$export$2e2bcd8739ae039 = $ceea39f99f315fb7$var$executeFns;


const $0728fecdbf281315$var$asyncEffectArray1 = [];
const $0728fecdbf281315$var$asyncEffectArray2 = [];
let $0728fecdbf281315$var$one = true;
function $0728fecdbf281315$export$2e2bcd8739ae039(fn1) {
    const asyncEffectArray = $0728fecdbf281315$var$one ? $0728fecdbf281315$var$asyncEffectArray1 : $0728fecdbf281315$var$asyncEffectArray2;
    const newOne = $0728fecdbf281315$var$one ? false : true;
    asyncEffectArray.push(fn1);
    if (asyncEffectArray.length === 1) queueMicrotask(()=>{
        $0728fecdbf281315$var$one = newOne;
        asyncEffectArray.forEach((fn)=>fn());
        asyncEffectArray.length = 0;
    });
}


const $f0832425b32a585f$var$renderEffectArray1 = [];
const $f0832425b32a585f$var$renderEffectArray2 = [];
let $f0832425b32a585f$var$one = true;
function $f0832425b32a585f$export$2e2bcd8739ae039(fn1) {
    const renderEffectArray = $f0832425b32a585f$var$one ? $f0832425b32a585f$var$renderEffectArray1 : $f0832425b32a585f$var$renderEffectArray2;
    const newOne = $f0832425b32a585f$var$one ? false : true;
    renderEffectArray.push(fn1);
    if (renderEffectArray.length === 1) queueMicrotask(()=>{
        $f0832425b32a585f$var$one = newOne;
        renderEffectArray.forEach((fn)=>fn());
        renderEffectArray.length = 0;
    });
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
        //do this for the topmost parent effect (father of the whole tree)
        effect.level = 1;
        effect.position = 1;
        effect.cleanupTreeNodePointer = [
            1
        ];
        effect.cleanupTree = new Map();
    }
}


function $4e86dcede83c4655$export$2e2bcd8739ae039(effect) {
    //create variable to store `cleanupNode` of effect and initially set the variable to the cleanup tree
    let cleanupNode = effect.cleanupTree;
    //extract the `cleanupNode` from the `cleanupTree` and set it to the `cleanupNode` variable
    effect.cleanupTreeNodePointer.forEach((part)=>{
        if (!cleanupNode.get(part)) cleanupNode.set(part, new Map());
        cleanupNode = cleanupNode.get(part);
    });
    //set cleanup set for effect if it doesn't already exist in the cleanup map
    if (!cleanupNode.get(0)) cleanupNode.set(0, new Set());
}


function $3d1734ecfb3ab0e5$export$2e2bcd8739ae039(type, tracking, fn, depArray) {
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
        //used to store the return value of the previous effect execution
        returnValue: null,
        //used to notify the effect when a state value of state currently tracking the effect turns
        //stale or freshens up after turning stale
        sendSignal: (signal)=>(0, $6d9dc4dd8bec4bc7$export$2e2bcd8739ae039)(effect, execute, fn, depArray, signal)
    };
    //create `cleanupTreeNodePointer` for effect and create `cleanupTree` for effect tree is this is the
    //topmost parent effect (father of the whole tree)
    (0, $6a3ab3c6cee3c885$export$2e2bcd8739ae039)(effect);
    //create `cleanupSet` for effect if it doesn't already exist
    (0, $4e86dcede83c4655$export$2e2bcd8739ae039)(effect);
    //return effect `execute` function and effect itself
    return [
        execute,
        effect
    ];
}


function $7f5aa80b032d6a3a$export$2e2bcd8739ae039(fn, depArray, options) {
    const [execute, effect] = (0, $3d1734ecfb3ab0e5$export$2e2bcd8739ae039)("sync", "componentFn", fn, depArray);
    //return cleanup function / component cleanup array
    return execute(effect, fn, depArray, options);
}



function $dd1a9c42706c6616$export$2e2bcd8739ae039(fn, depArray, options) {
    //determine if the effect is tracked by the state it uses implicitly, or using the
    //state provided by its dependency array
    const tracking = typeof depArray === "undefined" ? "implicit" : "depArray";
    const [execute, effect] = (0, $3d1734ecfb3ab0e5$export$2e2bcd8739ae039)("sync", tracking, fn, depArray);
    //return cleanup function / component cleanup array
    return execute(effect, fn, depArray, options);
}




class $d7efe1102037d5ee$var$$ extends (0, $6oBH7$AsyncDirective) {
    constructor(partInfo){
        super(partInfo);
        //boolean flag to enable initialization of the component in the update method.
        this.updateFlag = "initialize";
    }
    disconnected() {
        this.cleanups.forEach((cleanup)=>cleanup());
    }
    //normal render process
    externalRender(props) {
        for(const prop in props)this.props[prop] = props[prop];
        return this.render();
    }
    //first time initialization of component
    initialize(props, part, Component1) {
        this.props = props;
        return this.initializeComponent(Component1, part.parentNode, this.props);
    }
    initializeComponent(Component2, parent, props) {
        //initialize cleanups for component. this includes:
        //1. general component cleanup for all its effects and memos
        //2. cleanup of the effect created from the function (that returns a template result) the component returns
        this.cleanups = [];
        //store the function (that returns a template result) the component returns in `htmlFn` for later us
        let htmlFn;
        //initialize component effects and memos and store the cleanup (1st cleanup)
        this.cleanups.push((0, $dd1a9c42706c6616$export$2e2bcd8739ae039)(()=>htmlFn = Component2(props, parent), []));
        const [ComponentCleanup, ComponentDependencyUpdate, [htmlTemplateResult1], ] = (0, $7f5aa80b032d6a3a$export$2e2bcd8739ae039)((_, [htmlTemplateResult])=>{
            this.setValue(htmlTemplateResult);
        }, [
            htmlFn
        ], {
            defer: true,
            isComponent: true
        });
        //store 2nd cleanup
        this.cleanups.push(ComponentCleanup);
        //store reference to function used to update component return function dependencies and return template
        //result for rendering
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
        this.updateFlag = "externalRender";
        return htmlTemplateResult1;
    }
    update(part, [Component3, props]) {
        //initialize component for the first time or go through normal rendering processes based on the state of `updateFlag`
        return this[this.updateFlag](props, part, Component3);
    }
    reconnected() {
        this.updateFlag = "initialize";
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
    //toggle active subscriptions
    state.activeSubscriptions = activeSubscriptions === "one" ? "two" : "one";
    //let subscriptions know that they have a stale value so that they can notify their
    //subscriptions if any
    (0, $6dc9040d05697a8e$export$ac2bda8cd89c2590)(state, activeSubscriptions);
    //update state value
    state.value = nextValue;
    //let subscriptions know that their stale value has been updated so that they can notify and
    //update themselves and their subscriptions if any
    (0, $6dc9040d05697a8e$export$436b218e987b82fc)(state, activeSubscriptions);
    //update memo cleanups after all effects have been fired to ensure that no memos are run twice, triggering their effects
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
    //determine if the effect is tracked by the state it uses implicitly, or using the
    //state provided by its dependency array
    const tracking = typeof depArray === "undefined" ? "implicit" : "depArray";
    const [execute, effect] = (0, $3d1734ecfb3ab0e5$export$2e2bcd8739ae039)("render", tracking, fn, depArray);
    //execute effect asynchronously after next screen paint and return a promise that
    //resolves with the cleanup function / component cleanup array
    return new Promise((resolve)=>setTimeout(()=>{
            resolve(execute(effect, fn, depArray, options));
        }));
}



function $c81bb8edf610f60a$export$2e2bcd8739ae039(fn, depArray, options) {
    //determine if the effect is tracked by the state it uses implicitly, or using the
    //state provided by its dependency array
    const tracking = typeof depArray === "undefined" ? "implicit" : "depArray";
    const [execute, effect] = (0, $3d1734ecfb3ab0e5$export$2e2bcd8739ae039)("render", tracking, fn, depArray);
    //execute effect asynchronously before next screen paint and return a promise that
    //resolves with the cleanup function / component cleanup array
    return new Promise((resolve)=>{
        queueMicrotask(()=>resolve(execute(effect, fn, depArray, options)));
    });
}








function $167a1cc90c461710$export$e5bb50160f277516(memo) {
    //get active subscriptions to properly manange sync effects and memos
    const activeSubscriptions = memo.activeSubscriptions;
    //toggle active subscriptions
    memo.activeSubscriptions = activeSubscriptions === "one" ? "two" : "one";
    //let subscriptions know that they have a stale value so that they can notify their
    //subscriptions if any
    (0, $6dc9040d05697a8e$export$ac2bda8cd89c2590)(memo, activeSubscriptions);
}
function $167a1cc90c461710$export$18b21b881485961f(memo, fn) {
    //set `childCount` back to zero to enable children effects to obtain correct positions upon recreation
    memo.childCount = 0;
    //fire cleanups make sure proceedings go smoothly
    const cleanupSet = (0, $4e1accf2a3fa4a57$export$2e2bcd8739ae039)(memo).get(0);
    for (const cleanup of cleanupSet){
        //if cleanup is a memo, return it and exit out of function because this means that if the function continues to run
        //the memo would potentially run twice and re-trigger all of its dependents
        if (typeof cleanup !== "function") return cleanup;
        cleanup();
    }
    cleanupSet.clear();
    //push memo onto context to enable tracking by state and other memos
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).push(memo);
    memo.value = fn();
    if (memo.firstRun) {
        memo.firstRun = false;
        //on first run, add cleanup function to cleanupSet
        cleanupSet.add(()=>(0, $191ea01d20b057a5$export$2e2bcd8739ae039)(memo));
    } else {
        //else add memo to cleanupSet so that the check that runs inside the for of loop above is able to effectively do its job
        //and prevent memos from running twice, especially when nested in effects that also depend on them or in other "edge" cases
        cleanupSet.add(memo);
        //then `queueCleanupUpdates` for later for the same reasons mentioned in the comment above
        (0, $07cf289615170a3d$export$1b3c45eb1fa5da02)(()=>{
            cleanupSet.clear();
            cleanupSet.add(()=>(0, $191ea01d20b057a5$export$2e2bcd8739ae039)(memo));
        });
    }
    //remove memo from context to disable tracking by state and other memos
    (0, $cf23c9ad92c46644$export$24642de4c13f18dd).pop();
    //get `activeSubscriptions` as the opposite for `memo.activeSubscriptions` because it recently toggled in `sendStaleNotifications`
    const activeSubscriptions = memo.activeSubscriptions === "one" ? "two" : "one";
    //let subscriptions know that their stale value has been updated so that they can notify and
    //update themselves and their subscriptions if any
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

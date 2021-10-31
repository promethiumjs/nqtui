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


class $cb3597414830fe60$export$2e2bcd8739ae039 {
    constructor(props){
        this.state = {
        };
        this.events = {
        };
        this.children = {
        };
        this.props = props || {
        };
    }
    static create(ClassName, props) {
        let component = new ClassName(props);
        component.subscribeToEvent("updateRoot", component.render.bind(component, component.props.renderContainer, component.props.renderOptions));
        if (component.addChildNodes) component.addChildNodes();
        return component;
    }
    static createInstanceFromObject(ClassName, object) {
        return Object.assign(new ClassName(), object);
    }
    addChild(ClassName, nodeName, props) {
        this.children[nodeName] = new ClassName(props);
        if (this.events.hasOwnProperty("updateRoot")) this.children[nodeName].subscribeToEvent("updateRoot", this.events.updateRoot[0]);
        if (this.children[nodeName].addChildNodes) this.children[nodeName].addChildNodes();
        return this.children[nodeName];
    }
    addChildWithTiedState(ClassName, nodeName, props) {
        this.children[nodeName] = new ClassName(props);
        if (this.events.hasOwnProperty("updateRoot")) this.children[nodeName].subscribeToEvent("updateRoot", this.events.updateRoot[0]);
        if (this.children[nodeName].addChildNodes) this.children[nodeName].addChildNodes();
        this.state[nodeName] = this.children[nodeName].state;
        return this.children[nodeName];
    }
    addProps(props) {
        this.props = Object.assign(this.props, props);
        return this;
    }
    addState(state, event, args) {
        this.state = Object.assign(this.state, state);
        if (event) this.emitEvent(event, args);
        return this;
    }
    addToChildren(ClassName, nodeListName, props) {
        let child = new ClassName(props);
        if (!this.children[nodeListName]) {
            this.children[nodeListName] = [];
            this.state[nodeListName] = [];
        }
        this.children[nodeListName].push(child);
        if (this.events.hasOwnProperty("updateRoot")) child.subscribeToEvent("updateRoot", this.events.updateRoot[0]);
        if (child.addChildNodes) child.addChildNodes();
        return child;
    }
    addToChildrenWithTiedState(ClassName, nodeListName, props) {
        let child = new ClassName(props);
        if (!this.children[nodeListName]) {
            this.children[nodeListName] = [];
            this.state[nodeListName] = [];
        }
        this.children[nodeListName].push(child);
        if (this.events.hasOwnProperty("updateRoot")) child.subscribeToEvent("updateRoot", this.events.updateRoot[0]);
        if (child.addChildNodes) child.addChildNodes();
        this.state[nodeListName].push(child.state);
        return child;
    }
    clone() {
        //let clone = new Component();
        //let decoy = JSON.parse(JSON.stringify(this));
        //clone = Object.assign(clone, decoy);
        //return clone
        return Object.create(this);
    }
    content(props) {
        if (props) this.addProps(props);
        return this.template();
    }
    emitEvent(eventName, args) {
        if (this.events[eventName]) this.events[eventName].forEach((fn)=>fn(args)
        );
    }
    render(container, renderOptions) {
        if (renderOptions) $c1Qrr$render(this.template(), container, renderOptions);
        else $c1Qrr$render(this.template(), container);
    }
    subscribeToEvent(eventName, callback) {
        if (this.events[eventName]) this.events[eventName].push(callback);
        else {
            this.events[eventName] = [];
            this.events[eventName].push(callback);
        }
        return {
            unsubscribe: ()=>this.events[eventName] && this.events[eventName].splice(this.events[eventName].indexOf(callback) >>> 0, 1)
        };
    }
}














export {$cb3597414830fe60$export$2e2bcd8739ae039 as Component, $e6d95b80e07e2d2a$re_export$html as html, $e6d95b80e07e2d2a$re_export$classMap as classMap, $e6d95b80e07e2d2a$re_export$styleMap as styleMap, $e6d95b80e07e2d2a$re_export$guard as guard, $e6d95b80e07e2d2a$re_export$cache as cache, $e6d95b80e07e2d2a$re_export$repeat as repeat, $e6d95b80e07e2d2a$re_export$live as live, $e6d95b80e07e2d2a$re_export$ifDefined as ifDefined, $e6d95b80e07e2d2a$re_export$ref as ref, $e6d95b80e07e2d2a$re_export$until as until};
//# sourceMappingURL=nqtui.js.map

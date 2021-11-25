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
        this.events = {
        };
        this.children = {
        };
        this.props = props || {
        };
        this.$ = this.content;
        this.updateChildNodes = true;
    }
    /**
   * Create a new component using the expression "Component.create()".
   * @param {class} ClassName - The class that you want your component to extend(The provided
   * class should be one that extends the Component class). This argument is required.
   * @param {object} props - An object of properties that will be set as your component's props object.
   * @return {Component} The newly created component.
   */ static create(ClassName, props) {
        let component = new ClassName(props);
        //if (component.addStaticChildNodes) {
        //const $ = component.addChild.bind(component);
        //const $s = component.addToChildren.bind(component);
        //component.addStaticChildNodes($, $s);
        //}
        return component;
    }
    /**
   * Create a new root component from an existing object using the expression "Component.createInstanceFromObject()".
   * @param {class} ClassName - The class that you want your component to extend(The provided
   * class should be one that extends the Component class). This argument is required.
   * @param {object} props - An object of properties that will be set as your component's props object.
   * This argument is also required, with a property of renderContainer. The value of the renderContainer
   * property should be the DOM element under which the component will be rendered(it's parent).
   * @return {Component} The newly created component.
   */ static createInstanceFromObject(ClassName, object, props) {
        let component = Object.assign(new ClassName(props), object);
        return component;
    }
    /**
   * Create a new root component using the expression "Component.createRoot()".
   * @param {class} ClassName - The class that you want your component to extend(The provided
   * class should be one that extends the Component class). This argument is required.
   * @param {object} props - An object of properties that will be set as your component's props object.
   * This argument is also required, with a property of renderContainer. The value of the renderContainer
   * property should be the DOM element under which the component will be rendered(it's parent).
   * @return {Component} The newly created component.
   */ static createRoot(ClassName, props) {
        let component = new ClassName(props);
        if (typeof component.props.renderContainer === "string" || component.props.renderContainer instanceof String) component.props.renderContainer = document.querySelector(component.props.renderContainer);
        component.addEvent("renderRoot", component.render.bind(component, component.props.renderContainer, component.props.renderOptions));
        //if (component.addStaticChildNodes) {
        //const $ = component.addChild.bind(component);
        //const $s = component.addToChildren.bind(component);
        //component.addStaticChildNodes($, $s);
        //}
        return component;
    }
    /**
   * Add a single child component to your component.
   * @param {class} ClassName - The class type of which you want the child component to be.
   * @param {string} nodeName - The property name with which you would like to reference the child component.
   * @param {object} [props] - An object of properties that will be set as the child component's props object.
   * @return {Component} The newly added child component.
   */ addChild(ClassName, nodeName, props) {
        this.children[nodeName] = new ClassName(props);
        if (this.events.hasOwnProperty("renderRoot")) this.children[nodeName].addEvent("renderRoot", this.events.renderRoot[0]);
        //if (this.children[nodeName].addStaticChildNodes) {
        //const $ = this.children[nodeName].addChild.bind(this.children[nodeName]);
        //const $s = this.children[nodeName].addToChildren.bind(
        //this.children[nodeName]
        //);
        //this.children[nodeName].addStaticChildNodes($, $s);
        //}
        return this.children[nodeName];
    }
    addProps(props) {
        Object.assign(this.props, props);
        return this;
    }
    /**
   * Update the state of your component.
   * @param {Object} state - An object that represents the state to be added to your component. New properties will
   * be added to your component's state object and existing properties will be used to update the corresponding values
   * on your component's state object.
   * @param {string} events - Events to be emmitted on your component.
   * @param {object} [eventObject] - Arguments to be passed to the event callback.
   * @return {Component} Returns the component whose state was updated.
   */ addState(state, events, eventObject) {
        Object.assign(this.state, state);
        this.update(events, eventObject);
        return this;
    }
    /**
   * Add a single child component to your component's children array containing children of the same type.
   * @param {class} ClassName - The class type of which you want the child component to be.
   * @param {string} nodeName - The property name that is currently being used to reference the array of chilren. If property
   * doesn't exist, it will be initialized with an empty array before the new child component is added.
   * @param {object} [props] - An object of properties that will be set as the child component's props object.
   * @return {Component} The newly added child component.
   */ addToChildren(ClassName, nodeListName, props) {
        let child = new ClassName(props);
        if (!this.children[nodeListName]) this.children[nodeListName] = [];
        this.children[nodeListName].push(child);
        if (this.events.hasOwnProperty("renderRoot")) child.addEvent("renderRoot", this.events.renderRoot[0]);
        //if (child.addStaticChildNodes) {
        //const $ = child.addChild.bind(child);
        //const $s = child.addToChildren.bind(child);
        //child.addStaticChildNodes($, $s);
        //}
        return child;
    }
    clone() {
        //let clone = new Component();
        //let decoy = JSON.parse(JSON.stringify(this));
        //clone = Object.assign(clone, decoy);
        //return clone
        return Object.create(this);
    }
    /**
   * Update your component's template and return it.
   * @param {object} [props] - An object of properties that will used to update component's props object. New properties will
   * be added to the component's props object and existing properties will be used to update the corresponding values
   * on your component's props object.
   * @return {TemplateResult} A lit-html TemplateResult object representing your component's template.
   */ content(props) {
        if (props) this.addProps(props);
        if (this.addChildNodes && this.updateChildNodes) {
            this.children = {
            };
            const $ = this.addChild.bind(this);
            const $s = this.addToChildren.bind(this);
            this.addChildNodes($, $s);
            this.updateChildNodes = false;
        }
        const $ = this.children;
        return this.template($);
    }
    /**
   * Emit an event on your component.
   * @param {string} eventName - A string representing the event type to be emitted.
   * @param {object} eventObject - An object containing properties to be used by event callbacks.
   * @return {Component}  Your component.
   */ emitEvent(eventName, eventObject) {
        if (this.events[eventName]) this.events[eventName].forEach((fn)=>fn(eventObject)
        );
        return this;
    }
    render(container, renderOptions) {
        if (renderOptions) $c1Qrr$render(this.content(), container, renderOptions);
        else $c1Qrr$render(this.content(), container);
        return this;
    }
    /**
   * This represents an event callback
   * @callback Component~eventCallback
   * @param {object} eventObject - An object containing properties to be used by event callback.
   */ /**
   * Subcribe to an event on your component.
   * @param {string} eventName - A string representing the event type to be subscribed to. Event type will be create if it doesn't
   * already exist.
   * @param {Component~eventCallback} callback - Callback function to be called when the event is emitted.
   */ addEvent(eventName, callback) {
        if (this.events[eventName]) this.events[eventName].push(callback);
        else {
            this.events[eventName] = [];
            this.events[eventName].push(callback);
        }
        return {
            remove: ()=>this.events[eventName] && this.events[eventName].splice(this.events[eventName].indexOf(callback) >>> 0, 1)
        };
    }
    update(events, eventObject) {
        this.updateChildNodes = true;
        if (events) events.forEach((event)=>this.emitEvent(event, eventObject)
        );
    }
}














export {$cb3597414830fe60$export$2e2bcd8739ae039 as Component, $e6d95b80e07e2d2a$re_export$html as html, $e6d95b80e07e2d2a$re_export$classMap as classMap, $e6d95b80e07e2d2a$re_export$styleMap as styleMap, $e6d95b80e07e2d2a$re_export$guard as guard, $e6d95b80e07e2d2a$re_export$cache as cache, $e6d95b80e07e2d2a$re_export$repeat as repeat, $e6d95b80e07e2d2a$re_export$live as live, $e6d95b80e07e2d2a$re_export$ifDefined as ifDefined, $e6d95b80e07e2d2a$re_export$ref as ref, $e6d95b80e07e2d2a$re_export$until as until};
//# sourceMappingURL=nqtui.js.map

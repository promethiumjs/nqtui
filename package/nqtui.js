import {html as $e6d95b80e07e2d2a$re_export$h, render as $c1Qrr$render} from "lit-html";
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



class $26569a28d0da7810$var$$$ extends $c1Qrr$AsyncDirective {
    constructor(part){
        super(part);
        this.initialization = true;
    }
    initializeComponent(Component, props) {
        if (Component.prototype && Component.prototype.isClassComponent) {
            this.Component = new Component(props);
            this.Component.addEvent("renderRoot", $26569a28d0da7810$var$updateFunction);
        }
        if (this.Component && this.Component.initialized) this.Component.initialized();
        this.initialization = false;
        this.createHookId();
    }
    createHookId() {
        const hookId = `${Math.random()}${Math.random()}`;
        this.hookId = hookId;
    }
    reconnected() {
        this.Component.reconnected();
    }
    disconnected() {
        this.Component.disconnected();
    }
    update(part, [Component, props]) {
        if (this.initialization) this.initializeComponent(Component, props);
        return this.render(Component, props);
    }
    render(Component, props) {
        if (this.Component) this.Component.addProps(props);
        return this.Component ? this.Component.construct(props) : Component(props);
    }
}
const $26569a28d0da7810$export$3d8c2f653ac9d0b9 = $c1Qrr$directive($26569a28d0da7810$var$$$);
let $26569a28d0da7810$var$updateFunction = null;
function $26569a28d0da7810$export$ea2a06bcd2224862(newUpdateFunction) {
    $26569a28d0da7810$var$updateFunction = newUpdateFunction;
}
function $26569a28d0da7810$export$573cc68b58aac4be() {
    $26569a28d0da7810$var$updateFunction();
}


class $cb3597414830fe60$export$2e2bcd8739ae039 {
    constructor(props){
        this.events = {
        };
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
        let updateFunction = component.render.bind(component, component.props.renderContainer, component.props.renderOptions);
        component.addEvent("renderRoot", updateFunction);
        $26569a28d0da7810$export$ea2a06bcd2224862(updateFunction);
        updateFunction();
        return component;
    }
    static createFunctionalComponentRoot(component, props) {
        if (typeof props.renderContainer === "string" || props.renderContainer instanceof String) props.renderContainer = document.querySelector(props.renderContainer);
        let updateFunction = $c1Qrr$render.bind(component, component(props), props.renderContainer, props.renderOptions);
        $26569a28d0da7810$export$ea2a06bcd2224862(updateFunction);
        updateFunction();
        return component;
    }
    /**
   * Create a new root component from an existing object using the expression "Component.createInstanceFromObject()".
   * @param {class} ComponentType - The class that you want your component to extend(The provided
   * class should be one that extends the Component class). This argument is required.
   * @param {object} props - An object of properties that will be set as your component's props object.
   * This argument is also required, with a property of renderContainer. The value of the renderContainer
   * property should be the DOM element under which the component will be rendered(it's parent).
   * @return {Component} The newly created component.
   */ static createRootFromObject(object, props) {
        let component = Object.assign(new $cb3597414830fe60$export$2e2bcd8739ae039(props), object);
        return $cb3597414830fe60$export$2e2bcd8739ae039.createClassComponentRoot(component);
    }
    /**
   * Create a new root component using the expression "Component.createRoot()".
   * @param {class} ComponentType - The class that you want your component to extend(The provided
   * class should be one that extends the Component class). This argument is required.
   * @param {object} props - An object of properties that will be set as your component's props object.
   * This argument is also required, with a property of renderContainer. The value of the renderContainer
   * property should be the DOM element under which the component will be rendered(it's parent).
   * @return {Component} The newly created component.
   */ static createRoot(ComponentType, props) {
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
        if (renderOptions) $c1Qrr$render(this.construct(), container, renderOptions);
        else $c1Qrr$render(this.construct(), container);
        return this;
    }
    update(events, eventObject) {
        if (events) events.forEach((event)=>this.emitEvent(event, eventObject)
        );
    }
}
$cb3597414830fe60$export$2e2bcd8739ae039.prototype.isClassComponent = true;















export {$cb3597414830fe60$export$2e2bcd8739ae039 as Component, $26569a28d0da7810$export$3d8c2f653ac9d0b9 as $, $e6d95b80e07e2d2a$re_export$h as h, $e6d95b80e07e2d2a$re_export$classMap as classMap, $e6d95b80e07e2d2a$re_export$styleMap as styleMap, $e6d95b80e07e2d2a$re_export$guard as guard, $e6d95b80e07e2d2a$re_export$cache as cache, $e6d95b80e07e2d2a$re_export$repeat as repeat, $e6d95b80e07e2d2a$re_export$live as live, $e6d95b80e07e2d2a$re_export$ifDefined as ifDefined, $e6d95b80e07e2d2a$re_export$ref as ref, $e6d95b80e07e2d2a$re_export$until as until};
//# sourceMappingURL=nqtui.js.map

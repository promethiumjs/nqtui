import { render } from "lit-html";
//@ts-check

/**
 * The Component Class.
 * @typedef Component
 * @type {object}
 * @property {object} state - An object that represents that state of your component.
 * @property {object} events - An object that represents that represents the events your component
 * is listening for.
 * @property {object} children - An object that represents that children of your component(these are usually other
 * components).
 * @property {object} props - An object that represents properties that have been passed down to your component
 * from it's parent.
 */

/**
 * The Component Class.
 */
export default class Component {
  constructor(props) {
    this.state = {};
    this.events = {};
    this.children = {};
    this.props = props || {};
  }

  /**
   * Create a new root component using the expression "Component.create()".
   * @param {class} ClassName - The class that you want your component to extend(The provided
   * class should be one that extends the Component class). This argument is required.
   * @param {object} props - An object of properties that will be set as your component's props object.
   * This argument is also required, with a property of renderContainer. The value of the renderContainer
   * property should be the DOM element under which the component will be rendered(it's parent).
   * @return {Component} The newly created component.
   */
  static create(ClassName, props) {
    let component = new ClassName(props);

    component.subscribeToEvent(
      "updateRoot",
      component.render.bind(
        component,
        component.props.renderContainer,
        component.props.renderOptions
      )
    );

    if (component.addChildNodes) component.addChildNodes();

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
   */
  static createInstanceFromObject(ClassName, object, props) {
    let component = Object.assign(new ClassName(props), object);

    component.subscribeToEvent(
      "updateRoot",
      component.render.bind(
        component,
        component.props.renderContainer,
        component.props.renderOptions
      )
    );

    if (component.addChildNodes) component.addChildNodes();

    return component;
  }

  /**
   * Add a single child component to your component.
   * @param {class} ClassName - The class type of which you want the child component to be.
   * @param {string} nodeName - The property name with which you would like to reference the child component.
   * @param {object} [props] - An object of properties that will be set as the child component's props object.
   * @return {Component} The newly added child component.
   */
  addChild(ClassName, nodeName, props) {
    this.children[nodeName] = new ClassName(props);

    if (this.events.hasOwnProperty("updateRoot")) {
      this.children[nodeName].subscribeToEvent(
        "updateRoot",
        this.events.updateRoot[0]
      );
    }

    if (this.children[nodeName].addChildNodes)
      this.children[nodeName].addChildNodes();

    return this.children[nodeName];
  }

  addChildWithTiedState(ClassName, nodeName, props) {
    this.children[nodeName] = new ClassName(props);

    if (this.events.hasOwnProperty("updateRoot")) {
      this.children[nodeName].subscribeToEvent(
        "updateRoot",
        this.events.updateRoot[0]
      );
    }

    if (this.children[nodeName].addChildNodes)
      this.children[nodeName].addChildNodes();

    this.state[nodeName] = this.children[nodeName].state;

    return this.children[nodeName];
  }

  addProps(props) {
    this.props = Object.assign(this.props, props);

    return this;
  }

  /**
   * Update the state of your component.
   * @param {Object} state - An object that represents the state to be added to your component. New properties will
   * be added to your component's state object and existing properties will be used to update the corresponding values
   * on your component's state object.
   * @param {string} event - Event to be emmitted on your component.
   * @param {object} [eventObject] - Arguments to be passed to the event callback.
   * @return {Component} Returns the component whose state was updated.
   */
  addState(state, event, eventObject) {
    this.state = Object.assign(this.state, state);
    if (event) this.emitEvent(event, eventObject);

    return this;
  }

  /**
   * Add a single child component to your component's children array containing children of the same type.
   * @param {class} ClassName - The class type of which you want the child component to be.
   * @param {string} nodeName - The property name that is currently being used to reference the array of chilren. If property
   * doesn't exist, it will be initialized with an empty array before the new child component is added.
   * @param {object} [props] - An object of properties that will be set as the child component's props object.
   * @return {Component} The newly added child component.
   */
  addToChildren(ClassName, nodeListName, props) {
    let child = new ClassName(props);

    if (!this.children[nodeListName]) {
      this.children[nodeListName] = [];
      this.state[nodeListName] = [];
    }

    this.children[nodeListName].push(child);

    if (this.events.hasOwnProperty("updateRoot")) {
      child.subscribeToEvent("updateRoot", this.events.updateRoot[0]);
    }

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

    if (this.events.hasOwnProperty("updateRoot")) {
      child.subscribeToEvent("updateRoot", this.events.updateRoot[0]);
    }

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

  /**
   * Update your component's template and return it.
   * @param {object} [props] - An object of properties that will used to update component's props object. New properties will
   * be added to the component's props object and existing properties will be used to update the corresponding values
   * on your component's props object.
   * @return {TemplateResult} A lit-html TemplateResult object representing your component's template.
   */
  content(props) {
    if (props) this.addProps(props);

    return this.template();
  }

  /**
   * Emit an event on your component.
   * @param {string} eventName - A string representing the event type to be emitted.
   * @param {object} eventObject - An object containing properties to be used by event callbacks.
   */
  emitEvent(eventName, eventObject) {
    if (this.events[eventName])
      this.events[eventName].forEach((fn) => fn(eventObject));
  }

  render(container, renderOptions) {
    if (renderOptions) {
      render(this.template(), container, renderOptions);
    } else {
      render(this.template(), container);
    }
  }

  /**
   * This represents an event callback
   * @callback Component~eventCallback
   * @param {object} eventObject - An object containing properties to be used by event callback.
   */

  /**
   * Subcribe to an event on your component.
   * @param {string} eventName - A string representing the event type to be subscribed to. Event type will be create if it doesn't
   * already exist.
   * @param {Component~eventCallback} callback - Callback function to be called when the event is emitted.
   */
  subscribeEvent(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [];
      this.events[eventName].push(callback);
    }

    return {
      unsubscribe: () =>
        this.events[eventName] &&
        this.events[eventName].splice(
          this.events[eventName].indexOf(callback) >>> 0,
          1
        ),
    };
  }
}

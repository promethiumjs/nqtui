import { render } from "lit-html";
import { setUpdateFunction } from "./$";
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
    this.events = {};
    this.props = props || {};
  }

  static createFromObject(object) {
    class NewClassComponent extends Component {
      constructor(props) {
        super(props);

        let objectKeys = Object.keys(object);

        objectKeys.forEach((objectKey) => {
          this[objectKey] = object[objectKey];
        });
      }
    }

    return NewClassComponent;
  }

  static createClassComponentRoot(component) {
    if (
      typeof component.props.renderContainer === "string" ||
      component.props.renderContainer instanceof String
    )
      component.props.renderContainer = document.querySelector(
        component.props.renderContainer
      );

    let updateFunction = component.render.bind(
      component,
      component.props.renderContainer,
      component.props.renderOptions
    );

    component.addEvent("renderRoot", updateFunction);

    setUpdateFunction(updateFunction);

    updateFunction();

    return component;
  }

  static createFunctionalComponentRoot(component, props) {
    if (
      typeof props.renderContainer === "string" ||
      props.renderContainer instanceof String
    )
      props.renderContainer = document.querySelector(props.renderContainer);

    let updateFunction = render.bind(
      component,
      component(props),
      props.renderContainer,
      props.renderOptions
    );

    setUpdateFunction(updateFunction);

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
   */
  static createRootFromObject(object, props) {
    let component = Object.assign(new Component(props), object);

    return Component.createClassComponentRoot(component);
  }

  /**
   * Create a new root component using the expression "Component.createRoot()".
   * @param {class} ComponentType - The class that you want your component to extend(The provided
   * class should be one that extends the Component class). This argument is required.
   * @param {object} props - An object of properties that will be set as your component's props object.
   * This argument is also required, with a property of renderContainer. The value of the renderContainer
   * property should be the DOM element under which the component will be rendered(it's parent).
   * @return {Component} The newly created component.
   */
  static createRoot(ComponentType, props) {
    if (ComponentType.prototype && ComponentType.prototype.isClassComponent) {
      let component = new ComponentType(props);

      return Component.createClassComponentRoot(component);
    } else {
      let component = ComponentType;

      return Component.createFunctionalComponentRoot(component, props);
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
   */
  addState(state, events, eventObject) {
    Object.assign(this.state, state);

    this.update(events, eventObject);

    return this;
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
  addEvent(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [];
      this.events[eventName].push(callback);
    }

    return {
      remove: () =>
        this.events[eventName] &&
        this.events[eventName].splice(
          this.events[eventName].indexOf(callback) >>> 0,
          1
        ),
    };
  }

  /**
   * Emit an event on your component.
   * @param {string} eventName - A string representing the event type to be emitted.
   * @param {object} eventObject - An object containing properties to be used by event callbacks.
   * @return {Component}  Your component.
   */
  emitEvent(eventName, eventObject) {
    if (this.events[eventName])
      this.events[eventName].forEach((fn) => fn(eventObject));

    return this;
  }

  render(container, renderOptions) {
    if (renderOptions) {
      render(this.construct(), container, renderOptions);
    } else {
      render(this.construct(), container);
    }

    return this;
  }

  update(events, eventObject) {
    if (events) events.forEach((event) => this.emitEvent(event, eventObject));
  }
}

Component.prototype.isClassComponent = true;

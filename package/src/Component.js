import { render } from "lit-html";

export default class Component {
  constructor(props) {
    this.state = {};
    this.events = {};
    this.children = {};
    this.props = props || {};
  }

  static create(ClassName, props) {
    let component = new ClassName(props);
    if (component.addChildNodes) component.addChildNodes();
    return component;
  }

  static createInstanceFromObject(ClassName, object) {
    return Object.assign(new ClassName(), object);
  }

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

  render(container, renderOptions) {
    if (renderOptions) {
      render(this.template(), container, renderOptions);
    } else {
      render(this.template(), container);
    }
  }

  emitEvent(eventName, args) {
    if (this.events[eventName])
      this.events[eventName].forEach((fn) => fn(args));
  }

  subscribeToEvent(eventName, callback) {
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

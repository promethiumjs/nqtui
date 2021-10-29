import { render } from "lit-html";

export default class Component {
  constructor(props) {
    this.state = {};
    this.children = {};
    this.props = props || {};
  }

  static create(ClassName, props) {
    return new ClassName(props);
  }

  static createInstanceFromObject(ClassName, object) {
    return Object.assign(new ClassName(), object);
  }

  addChild(ClassName, nodeName, props) {
    this.children[nodeName] = new ClassName(props);

    return this.children[nodeName];
  }

  addChildWithTiedState(ClassName, nodeName, props) {
    this.children[nodeName] = new ClassName(props);
    this.state[nodeName] = this.children[nodeName].state;

    return this.children[nodeName];
  }

  addState(state, callback) {
    this.state = Object.assign(this.state, state);
    if (typeof callback === "function") callback();
  }

  addToChildren(ClassName, nodeListName, props) {
    let child = new ClassName(props);

    if (!this.children[nodeListName]) {
      this.children[nodeListName] = [];
      this.state[nodeListName] = [];
    }

    this.children[nodeListName].push(child);

    return child;
  }

  addToChildrenWithTiedState(ClassName, nodeListName, props) {
    let child = new ClassName(props);

    if (!this.children[nodeListName]) {
      this.children[nodeListName] = [];
      this.state[nodeListName] = [];
    }

    this.children[nodeListName].push(child);
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
    if (renderOptions) render(this.template(), container, renderOptions);
    else render(this.template(), container);
  }

  dispatchEvent(event, target) {}

  handleDispatchedEvent(event, source) {}

  handleEvent(event, source) {}

  updateState() {}

  addEventHandler() {}

  linkEvent() {}
}

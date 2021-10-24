import { html, render } from "lit-html";

export default class Component {
  constructor(state, children) {
    this.state = state || {};
    this.children = children || {};
  }

  static createFrom(object) {
    return Object.assign(new Component(), object);
  }

  addChild(childNode, nodeName) {
    this.children[nodeName] = childNode;
    this.state[nodeName] = childNode.state;
  }

  addChildren(childNodeType, nodeListName, number) {
    this.children[nodeListName] = [];
    this.children[nodeListName].push(childNodeType);

    for (let i = 0; i < number - 1; i++) {
      this.children[nodeListName].push(childNodeType.cloneSelf());
    }
  }

  addState(state) {
    this.state = Object.assign(this.state, state);
  }

  cloneSelf() {
    let clone = new Component();
    let decoy = JSON.parse(JSON.stringify(this));
    clone = Object.assign(clone, decoy);

    return clone;
  }

  content() {}

  render(container, renderBefore) {
    if (renderBefore) render(this.content(), container, { renderBefore });
    else render(this.content(), container);
  }

  dispatchEvent(event, target) {}

  handleDispatchedEvent(event, source) {}

  handleEvent(event, source) {}

  updateState() {}

  addEventHandler() {}

  linkEvent() {}
}

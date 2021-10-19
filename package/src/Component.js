export class Component {
  constructor(state, children) {
    this.state = state || {};
    this.children = children || {};
  }

  addChild(childNode, name) {}

  addChildren(childNodeType, name) {}

  dispatchEvent(event, target) {}

  handleDispatchedEvent(event, source) {}

  handleEvent(event, source) {}

  updateState() {}
}

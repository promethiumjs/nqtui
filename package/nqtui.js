import {
  html as $e6d95b80e07e2d2a$re_export$html,
  render as $e6d95b80e07e2d2a$re_export$render,
} from "lit-html";

class $cb3597414830fe60$export$2e2bcd8739ae039 {
  constructor(state, children) {
    this.state = state || {};
    this.children = children || {};
  }
  static createFrom(object) {
    return Object.assign(
      new $cb3597414830fe60$export$2e2bcd8739ae039(),
      object
    );
  }
  addChild(childNode, nodeName) {
    this.children[nodeName] = childNode;
    this.state[nodeName] = childNode.state;
  }
  addChildren(childNodeType, nodeListName, number) {
    this.children[nodeListName] = [];
    this.children[nodeListName].push(childNodeType);
    for (let i = 0; i < number - 1; i++)
      this.children[nodeListName].push(childNodeType.cloneSelf());
  }
  addState(state) {
    this.state = Object.assign(this.state, state);
  }
  cloneSelf() {
    let clone = new $cb3597414830fe60$export$2e2bcd8739ae039();
    let decoy = JSON.parse(JSON.stringify(this));
    clone = Object.assign(clone, decoy);
    return clone;
  }
  content() {}
  render(container, renderBefore) {
    if (renderBefore)
      $e6d95b80e07e2d2a$re_export$render(this.content(), container, {
        renderBefore: renderBefore,
      });
    else $e6d95b80e07e2d2a$re_export$render(this.content(), container);
  }
  dispatchEvent(event, target) {}
  handleDispatchedEvent(event, source) {}
  handleEvent(event, source) {}
  updateState() {}
  addEventHandler() {}
  linkEvent() {}
}

export {
  $cb3597414830fe60$export$2e2bcd8739ae039 as Component,
  $e6d95b80e07e2d2a$re_export$html as html,
  $e6d95b80e07e2d2a$re_export$render as render,
};
//# sourceMappingURL=nqtui.js.map

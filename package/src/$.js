import { AsyncDirective, directive } from "lit-html/async-directive.js";
import { adaptStore, detonateStore } from "./adaptations/adaptations";

class $$ extends AsyncDirective {
  constructor(root) {
    super(root);

    this.initialization = true;
  }

  initializeComponent(Component, props) {
    if (Component.prototype && Component.prototype.isClassComponent) {
      this.Component = new Component(props);
    }

    if (this.Component && this.Component.initialized) {
      this.Component.initialized();
    }

    this.initialization = false;

    this.createStoreId();
  }

  createStoreId() {
    this.storeId = {};
  }

  reconnected() {
    this.initialization = true;
  }

  disconnected() {
    detonateStore(this.storeId);
  }

  update(parent, [Component, props]) {
    if (this.initialization) {
      this.initializeComponent(Component, props);
    }

    return this.render(Component, props, parent.parentNode);
  }

  render(Component, props, parent) {
    if (this.Component) {
      this.Component.addProps(props);
      this.Component.parent = parent;
    }

    adaptStore(this.storeId);

    return this.Component
      ? this.Component.construct({ parent, ...props })
      : Component({ parent, ...props });
  }
}

const $ = directive($$);

export default $;

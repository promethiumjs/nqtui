import { AsyncDirective, directive } from "lit-html/async-directive.js";

class $$ extends AsyncDirective {
  constructor(part) {
    super(part);

    this.initialization = true;
  }

  initializeComponent(Component, props) {
    if (Component.prototype && Component.prototype.isClassComponent) {
      this.Component = new Component(props);
      this.Component.addEvent("renderRoot", updateFunction);
    }

    if (this.Component && this.Component.initialized) {
      this.Component.initialized();
    }

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
    if (this.initialization) {
      this.initializeComponent(Component, props);
    }

    return this.render(Component, props);
  }

  render(Component, props) {
    if (this.Component) this.Component.addProps(props);
    return this.Component ? this.Component.construct(props) : Component(props);
  }
}

const $ = directive($$);

let updateFunction = null;

function setUpdateFunction(newUpdateFunction) {
  updateFunction = newUpdateFunction;
}

function callUpdateFunction() {
  updateFunction();
}

export { $, setUpdateFunction, callUpdateFunction };

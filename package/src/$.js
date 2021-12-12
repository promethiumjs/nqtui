import { AsyncDirective, directive } from "lit-html/async-directive.js";
import { adaptStore, detonateStore } from "./adaptations/adaptations";

class $$ extends AsyncDirective {
  constructor(part) {
    super(part);

    this.initialization = true;
  }

  initializeComponent(Component, props, parent) {
    if (Component.prototype && Component.prototype.isClassComponent) {
      this.ClassComponent = new Component(props);
    }

    this.Component = () => {
      if (this.ClassComponent) {
        this.ClassComponent.addProps(props);
        this.ClassComponent.parent = parent;
      }

      adaptStore(this);

      return this.ClassComponent
        ? this.ClassComponent.construct({ parent, ...props })
        : Component({ parent, ...props });
    };

    this.initialization = false;
  }

  disconnected() {
    detonateStore(this);
  }

  update(part, [Component, props]) {
    if (this.initialization) {
      this.initializeComponent(Component, props, part.parentNode);
    }

    return this.render(Component, props, part.parentNode);
  }

  render(Component, props, parent) {
    if (this.ClassComponent) {
      this.ClassComponent.addProps(props);
      this.ClassComponent.parent = parent;
    }

    adaptStore(this);

    return this.ClassComponent
      ? this.ClassComponent.construct({ parent, ...props })
      : Component({ parent, ...props });
  }
}

const $ = directive($$);

export default $;

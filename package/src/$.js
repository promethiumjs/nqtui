import { AsyncDirective, directive } from "lit-html/async-directive.js";
import {
  adaptStore,
  detonateStore,
  getPreventMultipleRenders,
} from "./adaptations/adaptations";
import { noChange } from "lit-html";

class $$ extends AsyncDirective {
  constructor(part) {
    super(part);

    //boolean flag to enable initialization of the
    //component in the update method.
    this.initialization = true;
  }

  initializeComponent(Component, props, parent) {
    //check if component is class component and add an instance of it to the directive
    //instance as its associated component.
    if (Component.prototype && Component.prototype.isClassComponent) {
      this.ClassComponent = new Component(props);
    }

    this.Component = (props) => {
      if (this.ClassComponent) {
        this.ClassComponent.addProps(props);
        this.ClassComponent.parent = parent;
      }

      //prepare adaptation store for component.
      adaptStore(this);

      //check "preventMultipleRenders" flag to prevent multiple redundant
      //re-rendering of components.
      //return component's return value to be rendered.
      if (!getPreventMultipleRenders())
        return this.ClassComponent
          ? this.ClassComponent.construct({ parent, ...props })
          : Component({ parent, ...props });
      else if (this.changed) {
        this.changed = false;
        queueMicrotask(() => (this.changed = true));

        return this.ClassComponent
          ? this.ClassComponent.construct({ parent, ...props })
          : Component({ parent, ...props });
      } else {
        return noChange;
      }
    };

    //initialize "changed" flag as true.
    this.changed = true;
    //prevent re-initialization of component on subsequent renders after
    //initialization.
    this.initialization = false;
  }

  disconnected() {
    //call pending cleanups and destroy component adaptation store.
    detonateStore(this);
  }

  update(part, [Component, props]) {
    //initialize component on first render
    if (this.initialization) {
      this.initializeComponent(Component, props, part.parentNode);
    }

    //keep old props to enable reuse when updating the component independently of it's
    //parent.
    this.oldProps = props;
    return this.render(Component, props, part.parentNode);
  }

  render(Component, props, parent) {
    return this.Component(props);
  }
}

const $ = directive($$);

export default $;

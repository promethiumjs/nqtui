import { AsyncDirective, directive } from "lit-html/async-directive.js";
import { adaptStore, detonateStore } from "./adaptations/adaptations";
import queueRevertChangedToTrue from "./queueRevertChangedToTrue";
import { noChange } from "lit-html";

class $ extends AsyncDirective {
  constructor(part) {
    super(part);

    //boolean flag to enable initialization of the
    //component in the update method.
    this.initialization = true;
  }

  initializeComponent(Component, parent) {
    this.Component = (props) => {
      //check "preventMultipleRenders" flag to prevent multiple redundant
      //re-rendering of components.
      //return component's return value to be rendered.
      if (this.changed) {
        this.changed = false;
        queueRevertChangedToTrue(this);

        //prepare adaptation store for component.
        adaptStore(this);

        return Component({ parent, ...props });
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
      this.initializeComponent(Component, part.parentNode);
    }

    //keep old props to enable reuse when updating the component independently of it's
    //parent.
    this.oldProps = props;
    return this.render(props);
  }

  render(props) {
    return this.Component(props);
  }
}

const h = directive($);

export default h;

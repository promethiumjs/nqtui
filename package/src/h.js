import { AsyncDirective, directive } from "lit-html/async-directive.js";
import queueRevertChangedToTrue from "./queueRevertChangedToTrue";
import { renderComponent } from "./adaptations/adaptations";
import adaptSyncEffect from "./adaptations/new-api/adaptEffect/adaptSyncEffect";
import { noChange } from "lit-html";

class $ extends AsyncDirective {
  constructor(part) {
    super(part);

    //boolean flag to enable initialization of the component in the update method.
    this.initialization = true;
  }

  initializeComponent(Component, parent, props) {
    this.cleanups = [];

    let htmlFn;
    this.cleanups.push(
      adaptSyncEffect(() => (htmlFn = Component({ parent, props })), [])
    );

    const [ComponentCleanup, ComponentDependencyUpdate, [htmlTemplateResult]] =
      adaptSyncEffect(
        (_, [htmlTemplateResult]) => renderComponent(this, htmlTemplateResult),
        [htmlFn],
        { defer: true, isComponent: true }
      );

    this.cleanups.push(ComponentCleanup);
    this.ComponentDependencyUpdate = ComponentDependencyUpdate;

    this.Component = () => {
      //check "changed" flag to prevent multiple redundant re-rendering of components.
      if (this.changed) {
        this.changed = false;
        queueRevertChangedToTrue(this);

        const htmlTemplateResult = this.ComponentDependencyUpdate?.();

        return htmlTemplateResult;
      } else {
        return noChange;
      }
    };

    //initialize "changed" flag as true.
    this.changed = true;
    //prevent re-initialization of component on subsequent renders after initialization.
    this.initialization = false;

    return htmlTemplateResult;
  }

  disconnected() {
    this.cleanups.forEach((cleanup) => cleanup());
  }

  update(part, [Component, props]) {
    //initialize component on first render
    if (this.initialization) {
      this.props = props;
      return this.initializeComponent(Component, part.parentNode, this.props);
    }

    for (const prop in props) {
      this.props[prop] = props[prop];
    }

    return this.render();
  }

  render() {
    return this.Component();
  }
}

const h = directive($);

export default h;

import {
  AsyncDirective,
  directive,
  DirectiveResult,
  PartInfo,
} from "lit-html/async-directive.js";
import queueRevertChangedToTrue from "./queueRevertChangedToTrue";
import { renderComponent } from "./adaptations/adaptations";
import adaptSyncEffect from "./adaptations/adaptEffect/adaptSyncEffect";
import { ChildPart, noChange, TemplateResult } from "lit-html";
import { Component } from "./render";

class $ extends AsyncDirective {
  initialization: boolean;
  cleanups: (() => void)[];
  ComponentDependencyUpdate: any;
  Component: () => TemplateResult;
  changed: boolean;
  props: any;

  constructor(partInfo: PartInfo) {
    super(partInfo);

    //boolean flag to enable initialization of the component in the update method.
    this.initialization = true;
  }

  initializeComponent(
    Component: (props: any, parent: Node) => () => TemplateResult,
    parent: Node,
    props: any
  ) {
    this.cleanups = [];

    let htmlFn: () => TemplateResult;
    this.cleanups.push(
      adaptSyncEffect(() => (htmlFn = Component(props, parent)), [])
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

        const [htmlTemplateResult] = this.ComponentDependencyUpdate?.();

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

  update(
    part: ChildPart,
    [Component, props]: [
      (props: any, parent: Node) => () => TemplateResult,
      any
    ]
  ) {
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

declare function hFunc(
  Component: () => () => TemplateResult,
  props?: null
): DirectiveResult;

declare function hFunc<Type>(
  Component: Component<Type>,
  props: Type
): DirectiveResult;

const h: typeof hFunc = directive($);

export default h;

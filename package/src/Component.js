import { render, html } from "lit-html";
import $ from "./$";
import { releaseCurrentStore } from "./adaptations/adaptations";
import { detonateEffectAndCleanupArray } from "./adaptations/adaptEffect";

export default class Component {
  constructor(props) {
    this.props = props || {};
  }

  static createFromObject(object) {
    class NewClassComponent extends Component {
      constructor(props) {
        super(props);

        let objectKeys = Object.keys(object);

        objectKeys.forEach((objectKey) => {
          this[objectKey] = object[objectKey];
        });
      }
    }

    return NewClassComponent;
  }

  static createRoot(component, props) {
    if (
      typeof props.renderContainer === "string" ||
      props.renderContainer instanceof String
    )
      props.renderContainer = document.querySelector(props.renderContainer);

    render(
      (() => html` ${$(component, props)}`)(),
      props.renderContainer,
      props.renderOptions
    );

    releaseCurrentStore();
    detonateEffectAndCleanupArray();
  }

  addProps(props) {
    Object.assign(this.props, props);

    return this;
  }

  render(container, renderOptions) {
    if (renderOptions) {
      render(this.construct(), container, renderOptions);
    } else {
      render(this.construct(), container);
    }
  }
}

Component.prototype.isClassComponent = true;

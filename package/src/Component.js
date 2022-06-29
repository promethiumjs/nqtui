import { render, html } from "lit-html";
import $ from "./$";
import {
  releaseCurrentStore,
  getCurrentStore,
  getCurrentStoreId,
  renderComponent,
} from "./adaptations/adaptations";

export default class Component {
  constructor(props) {
    //initialize component with props.
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
    //check whether or not "renderContainer" is a string and handle it
    //accordingly.
    if (
      typeof props.renderContainer === "string" ||
      props.renderContainer instanceof String
    )
      props.renderContainer = document.querySelector(props.renderContainer);

    const renderComponent = () =>
      render(
        (() => html` ${$(component, props)}`)(),
        props.renderContainer,
        props.renderOptions
      );

    //queue microtask to render the component to enable all extensions to run first.
    queueMicrotask(renderComponent);

    //release the reference to the current store.
    releaseCurrentStore();

    //return "renderComponet" function to allow re-rendering of whole root
    //component tree.
    return renderComponent;
  }

  static use(extension) {
    extension.addAdaptationMethods({
      getCurrentStore,
      getCurrentStoreId,
      renderComponent,
    });
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

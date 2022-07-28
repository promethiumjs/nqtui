import { render, html } from "lit-html";
import h from "./h";
import {
  releaseCurrentStore,
  getCurrentStore,
  getCurrentStoreId,
  renderComponent,
} from "./adaptations/adaptations";

export default class Component {
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
        html`${h(component, props)}`,
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
}

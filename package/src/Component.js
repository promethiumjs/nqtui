import { render, html } from "lit-html";
import h from "./h";

export default class Component {
  static createRoot(Component, props) {
    //check whether or not "renderContainer" is a string and handle it
    //accordingly.
    if (
      typeof props.renderContainer === "string" ||
      props.renderContainer instanceof String
    )
      props.renderContainer = document.querySelector(props.renderContainer);

    const renderComponent = () =>
      render(
        html`${h(Component, props)}`,
        props.renderContainer,
        props.renderOptions
      );

    //queue microtask to render the component to enable all extensions to run first.
    queueMicrotask(renderComponent);

    //return "renderComponet" function to allow re-rendering of whole root
    //component tree.
    return renderComponent;
  }
}

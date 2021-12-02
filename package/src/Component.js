import { render } from "lit-html";
import { setRenderFunction, callRenderFunction } from "./helpers";
//@ts-check

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

  static createClassComponentRoot(component) {
    if (
      typeof component.props.renderContainer === "string" ||
      component.props.renderContainer instanceof String
    )
      component.props.renderContainer = document.querySelector(
        component.props.renderContainer
      );

    let renderFunction = component.render.bind(
      component,
      component.props.renderContainer,
      component.props.renderOptions
    );

    setRenderFunction(renderFunction);

    callRenderFunction();

    return component;
  }

  static createFunctionalComponentRoot(component, props) {
    if (
      typeof props.renderContainer === "string" ||
      props.renderContainer instanceof String
    )
      props.renderContainer = document.querySelector(props.renderContainer);

    let renderFunction = () => {
      render(component(props), props.renderContainer, props.renderOptions);
    };

    setRenderFunction(renderFunction);

    callRenderFunction();

    return component;
  }

  static createRootFromObject(object, props) {
    let component = Object.assign(new Component(props), object);

    return Component.createClassComponentRoot(component);
  }

  static createRoot(ComponentType, props) {
    if (ComponentType.prototype && ComponentType.prototype.isClassComponent) {
      let component = new ComponentType(props);

      return Component.createClassComponentRoot(component);
    } else {
      let component = ComponentType;

      return Component.createFunctionalComponentRoot(component, props);
    }
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

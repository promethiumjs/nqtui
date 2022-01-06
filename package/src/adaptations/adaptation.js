import {
  adaptStore as adapt,
  releaseCurrentStore as release,
  detonateStore as detonate,
} from "./adaptations";

function adaptation(adaptationObject) {
  const customAdaptation = {};

  customAdaptation.connect = adaptationObject.connect;
  customAdaptation.call = () => {
    adapt(customAdaptation);
    const returnValue = adaptationObject.call();
    release();

    return returnValue;
  };
  customAdaptation.detonate = () => detonate(customAdaptation);

  return customAdaptation;
}

export default adaptation;

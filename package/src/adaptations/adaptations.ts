import { TemplateResult } from "lit-html";
import { AsyncDirective } from "lit-html/async-directive.js";

const renderArray1: AsyncDirective[] = [];
const renderArray2: AsyncDirective[] = [];
let one: boolean = true;

function renderComponent(
  componentAsyncDirective: AsyncDirective,
  htmlTemplateResult: TemplateResult
) {
  const renderArray = one ? renderArray1 : renderArray2;
  const newOne = one ? false : true;

  renderArray.push(componentAsyncDirective);

  if (renderArray.length === 1) {
    queueMicrotask(() => {
      one = newOne;

      renderArray.forEach((componentAsyncDirective) => {
        componentAsyncDirective.setValue(htmlTemplateResult);
      });

      renderArray.length = 0;
    });
  }
}

export { renderComponent };

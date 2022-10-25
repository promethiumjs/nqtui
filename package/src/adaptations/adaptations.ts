import { TemplateResult } from "lit-html";
import { AsyncDirective } from "lit-html/async-directive.js";

const renderArray1: AsyncDirective[] = [];
const renderArray2: AsyncDirective[] = [];
let one: boolean = true;

function renderComponent(
  componentAsyncDirective: AsyncDirective,
  htmlTemplateResult: TemplateResult
) {
  if (one) {
    renderArray1.push(componentAsyncDirective);

    if (renderArray1.length === 1) {
      queueMicrotask(() => {
        one = false;

        renderArray1.forEach((componentAsyncDirective) => {
          componentAsyncDirective.setValue(htmlTemplateResult);
        });

        renderArray1.length = 0;
      });
    }
  } else {
    renderArray2.push(componentAsyncDirective);

    if (renderArray2.length === 1) {
      queueMicrotask(() => {
        one = true;

        renderArray2.forEach((componentAsyncDirective) => {
          componentAsyncDirective.setValue(htmlTemplateResult);
        });

        renderArray2.length = 0;
      });
    }
  }
}

export { renderComponent };

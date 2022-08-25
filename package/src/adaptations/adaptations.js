const renderArray1 = [];
const renderArray2 = [];
let one = true;

function renderComponent(componentAsyncDirective, htmlTemplateResult) {
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

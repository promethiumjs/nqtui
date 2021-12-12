import { html, adaptState, adapt, release } from "nqtui";

const storeId = {};
function TodoInput() {
  function testAdaptAndRelease() {
    adapt(storeId);
    const [count, setCount] = adaptState(0);
    release();

    console.log(count);
    setCount(count + 1);
  }

  return html`<button @click=${testAdaptAndRelease}>
    TestAdaptAndRelease
  </button>`;
}

export default TodoInput;

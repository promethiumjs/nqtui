import { html, adaptState, adapt, release, adaptEvents } from "nqtui";

const storeId = {};
function TodoInput() {
  const logEvent = adaptEvents([(e, num) => console.log(e, num)]);

  function testAdaptAndRelease() {
    console.log(storeId);
    adapt(storeId);
    const [count, setCount] = adaptState(0);
    release();

    console.log(count);
    setCount(count + 1);
  }

  return html`<button @click=${testAdaptAndRelease}>TestAdaptAndRelease</button>
    <button @click=${(e) => logEvent(e, 4)}>console.log(e)</button> `;
}

export default TodoInput;

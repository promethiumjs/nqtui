import { html, adaptEvents, adaptState, adaptEffect } from "nqtui";

const Container = ({ $click, $noop }) => {
  const [count, setCount] = adaptState(0);
  const [count1, setCount1] = adaptState(0);

  const emitEvents = adaptEvents([$noop, "render", $click]);
  const emitRender = adaptEvents(["render"]);

  const emitEvents1 = adaptEvents([
    $noop,
    "render",
    "render",
    $click,
    "render",
  ]);

  return html` <button @click=${emitRender}>Render</button>
    <button @click=${() => emitEvents(count)}>EventButton</button>
    <button @click=${() => emitEvents1(count1)}>EventButton1</button>
    <button @click=${() => setCount(count + 5)}>${count}</button>
    <button @click=${() => setCount1(count1 + 5)}>${count1}</button>`;
};

export default Container;

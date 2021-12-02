import { html, adaptEvents, adaptState } from "nqtui";

const Container = ({ $click, $noop }) => {
  const [count, setCount] = adaptState(0);
  const [count1, setCount1] = adaptState(0);

  const emitEvents = adaptEvents([$click, "render", $noop, "render"], null, {
    increment: count1,
  });

  const emitEvents1 = adaptEvents(
    [$noop, $click, "render", "render", "render"],
    null,
    {
      increment: count,
    }
  );

  return html`<button @click=${emitEvents}>EventButton</button>
    <button @click=${emitEvents1}>EventButton1</button>
    <button @click=${() => setCount(count + 5)}>${count}</button>
    <button @click=${() => setCount1(count1 + 5)}>${count1}</button>`;
};

export default Container;

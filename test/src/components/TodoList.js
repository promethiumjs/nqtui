import { html, $, adaptState, adaptEffect, adaptEvents } from "nqtui";
import TodoInput from "./TodoInput";

function TodoList({ parent }) {
  const [count, setCount] = adaptState(0);
  const [beat, setBeat] = adaptState(0);

  adaptEffect(() => {
    console.log(parent.querySelector(".todo"));
    setCount((count) => count + 5);
  }, [beat]);

  adaptEffect(() => {
    console.log("connected");

    return () => console.log("disconnected");
  }, []);

  const event = adaptEvents(() => {
    console.log(beat + count);
  }, [count]);

  return html` <div>
    <div class="todo">TodoList</div>
    <button @click=${() => setCount(count + 1)}>
      IncrementCount: ${count}
    </button>
    <button @click=${() => setBeat(beat + 1)}>IncrementBeat: ${beat}</button>
    <button @click=${event}>EmitEvent</button>
    ${$(TodoInput)}
  </div>`;
}

export default TodoList;

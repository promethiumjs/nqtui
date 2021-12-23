import {
  html,
  $,
  adaptState,
  adaptEffect,
  adaptInvocationEffect,
  adaptInstantEffect,
  adaptEvents,
} from "nqtui";
import TodoInput from "./TodoInput";

function TodoList({ parent }) {
  const [getCount, setCount] = adaptState(0, "getter");
  const [beat, setBeat] = adaptState(0);

  adaptInvocationEffect(() => {
    console.log(getCount());
    setCount(5);
  }, []);

  adaptEffect(() => {
    console.log("connected");

    return () => console.log("disconnected");
  }, []);

  const event = adaptEvents(() => {
    console.log(beat + getCount());
  }, [getCount()]);

  return html` <div>
    <div class="todo">TodoList</div>
    <button @click=${() => setCount(getCount() + 1)}>
      IncrementCount: ${getCount()}
    </button>
    <button @click=${() => setBeat(beat + 1)}>IncrementBeat: ${beat}</button>
    <button @click=${event}>EmitEvent</button>
    ${$(TodoInput)}
  </div>`;
}

export default TodoList;

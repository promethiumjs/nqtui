import {
  html,
  $,
  adaptEvents,
  adaptState,
  adaptEffect,
  adaptInvocationEffect,
} from "nqtui";
import TodoList from "./TodoList";

function Todo({ parent }) {
  const [count, setCount] = adaptState(0);
  const [beat, setBeat] = adaptState(0);
  const [todoList, setTodoList] = adaptState(true);

  const event = adaptEvents(() => {
    console.log(beat + count);
  }, [count]);

  adaptEffect(() => {
    console.log(parent.querySelector(".todo"));
  });

  adaptInvocationEffect(() => {
    setCount(5, () => console.log(5));
  }, []);

  return html`<div>
    <div class="todo">Todo</div>
    <button @click=${() => setCount(count + 1)}>
      IncrementCount: ${count}
    </button>
    <button @click=${() => setBeat(beat + 1)}>IncrementBeat: ${beat}</button>
    <button @click=${event}>EmitEvent</button>
    <button @click=${() => setTodoList(!todoList)}>ToggleTodoList</button>
    ${todoList ? $(TodoList) : ""}
  </div>`;
}

export default Todo;

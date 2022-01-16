import { html, $, adaptState, adaptGetState } from "nqtui";
import TodoInput from "./TodoInput";

function TodoList() {
  const [count, setCount] = adaptState(0);
  const [getCount1, setCount1] = adaptGetState(0);

  console.log("TodoList");

  return html` <div>
    <button @click=${() => setCount(count + 1)}>TodoCount: ${count}</button>
    <button @click=${() => setCount1(getCount1() + 1)}>
      TodoGetCount: ${getCount1()}
    </button>
    <div class="todo">TodoList</div>
    ${$(TodoInput)}
  </div>`;
}

export default TodoList;

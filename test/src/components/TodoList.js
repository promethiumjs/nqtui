import { html, $, adaptState, adaptation, adaptEffect } from "nqtui";
import { adaptParticle } from "nqtx";
import TodoInput from "./TodoInput";

function TodoList() {
  const [count, setCount] = adaptState(0);
  const [particleCount, $particleCount] = adaptParticle("count-1");

  console.log("TodoList");
  return html` <div>
    <button @click=${() => setCount(count + 1)}>TodoCount: ${count}</button>
    <div class="todo">TodoList</div>
    ${$(TodoInput)}
  </div>`;
}

export default TodoList;

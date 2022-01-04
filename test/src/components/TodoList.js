import { html, $, adaptState, adaptEffect, adaptInvocationEffect } from "nqtui";
import TodoInput from "./TodoInput";

function TodoList() {
  return html` <div>
    <div class="todo">TodoList</div>
    ${$(TodoInput)}
  </div>`;
}

export default TodoList;

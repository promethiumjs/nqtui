import { html, adaptState, adaptFunction } from "nqtui";

function TodoInput() {
  return html`
    <button @click=${(e) => console.log(e, 4)}>console.log(e)</button>
  `;
}

export default TodoInput;

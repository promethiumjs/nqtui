import { html, h, adaptEffect } from "nqtui";

function Todo({ props }) {
  adaptEffect(() => {
    return () => console.log("news");
  });

  return () => html`<div>How are you doing?? ${props.text}</div>`;
}

export default Todo;

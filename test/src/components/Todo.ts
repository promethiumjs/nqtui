import { html, adaptEffect } from "nqtui";
import { Component } from "nqtui";

const Todo: Component<{ text: string }> = (props) => {
  adaptEffect(() => {
    return () => console.log("news");
  });

  return () => html`<div>How are you doing?? ${props.text}</div>`;
};

export default Todo;

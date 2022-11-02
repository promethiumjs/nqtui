import { html } from "nqtui";
import { count, showOne } from "./App";

const One = () => {
  return () => {
    return html`<div class=${showOne() ? "" : "hidden"}>
      This is ${count()} One!!!!!
    </div>`;
  };
};

export default One;

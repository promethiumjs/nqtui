import { html, $, adaptState, adaptEvents, adaptEffect } from "nqtui";
import Todo from "./Todo";

const App = () => {
  const render = adaptEvents();

  console.log("here");
  adaptEffect(render, []);
  return html`${$(Todo)}`;
};

export default App;

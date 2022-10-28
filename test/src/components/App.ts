import { html, h, adaptState, adaptEffect, adaptMemo } from "nqtui";
import Todo from "./Todo";

const App = () => {
  const [count, setCount] = adaptState(0);
  const [showTodo, setShowTodo] = adaptState(true);

  adaptEffect(() => console.log(count()));

  return () => html` <div>What the fuck is going on here??</div>
    <div>This is ${count()}</div>
    <button @click=${() => setCount(count() + 1)}>Increment Count</button>
    <button @click=${() => setShowTodo(!showTodo())}>Toggle ShowTodo</button>
    ${showTodo()
      ? h(Todo, { text: "showing" })
      : //h(Todo, { text: "not showing" })
        ""}`;
};

export default App;

import { html, $, adaptState, adaptation, adaptEffect } from "nqtui";
import TodoInput from "./TodoInput";

const adaptWhatever = adaptation({
  connect() {
    adaptEffect(() => {
      console.log(24);

      return () => {
        console.log("log4j");
        this.detonate();
      };
    }, []);

    this.call();
  },

  call() {
    const [count, setCount1] = adaptState(0);

    console.log(count);
    adaptEffect(() => {
      console.log("calling from call");

      return () => console.log("cleaning up from call");
    }, []);

    return setCount1;
  },
});

function TodoList() {
  const [count, setCount] = adaptState(0);

  adaptWhatever.connect();
  const setCount1 = adaptWhatever.call();

  console.log("TodoList");
  return html` <div>
    <button @click=${() => setCount(count + 1)}>TodoCount: ${count}</button>
    <button @click=${() => setCount1((count) => count + 1)}>
      setWhateverCount
    </button>
    <button @click=${adaptWhatever.call}>call adaptWhatever</button>
    <div class="todo">TodoList</div>
    ${$(TodoInput)}
  </div>`;
}

export default TodoList;

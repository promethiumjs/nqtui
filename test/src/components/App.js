import {
  html,
  $,
  adaptFunction,
  adaptState,
  adaptEffect,
  adaptInstantEffect,
  adaptInvocationEffect,
  adaptRef,
} from "nqtui";
import {
  adaptTrigger,
  adaptEntity,
  adaptParticle,
  adaptDerivative,
} from "nqtx";
import Todo from "./Todo";

function App() {
  const [count, setCount] = adaptState(0);
  const [showTodo, setShowTodo] = adaptState(true);
  const firstTrigger = adaptTrigger("firstTrigger");
  const entity = adaptEntity();
  const render = adaptFunction();

  const derivedCount = adaptDerivative("derivedCount1");

  adaptEffect(() => {
    derivedCount.subscribe(() => console.log("derivative subscription here"));
  }, [derivedCount]);

  adaptEffect(() => {
    const unsub = firstTrigger.subscribe(event1);

    return () => unsub();
  }, [count]);

  const secondTrigger = adaptTrigger("secondTrigger");

  console.log("App");
  const event1 = () => {
    console.log("event1");
    setCount(count + 1);
    console.log(count);
  };

  return html`
    <div>derivedCount: ${derivedCount.getState({ jump: 3 })}</div>
    <button @click=${firstTrigger.invoke}>firstTrigger</button>
    <button @click=${render}>Render</button>
    <button @click=${secondTrigger.invoke}>secondTrigger</button>
    <button @click=${() => setShowTodo(!showTodo)}>ToggleTodo</button>
    <div>App</div>
    ${showTodo ? $(Todo, { count }) : ""}
  `;
}

export default App;

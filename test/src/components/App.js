import {
  html,
  $,
  adaptFunction,
  adaptState,
  adaptEffect,
  adaptInstantEffect,
} from "nqtui";
import { adaptEntity, adaptDerivative } from "nqtx";
import Todo from "./Todo";

function App() {
  const [count, setCount] = adaptState(0);
  const [showTodo, setShowTodo] = adaptState(true);
  const entity = adaptEntity();
  const render = adaptFunction(["update"]);

  adaptInstantEffect(() => {
    const derivative = entity.derivative({
      id: "derivedCount1",
      transform: ({ get, payload }) => {
        const animal = get("count");

        if (animal) return animal + payload.jump;
        else return payload.jump;
      },
    });

    return () => derivative.detonate();
  }, []);

  const [, $derivedCount] = adaptDerivative("derivedCount1");

  adaptEffect(() => {
    $derivedCount.subscribe((newState) =>
      console.log("derivative subscription here", newState)
    );
  }, [$derivedCount]);

  console.log("App");

  return html`
    <div>derivedCount: ${$derivedCount.get({ jump: 3 })}</div>
    <button @click=${render}>Render</button>
    <button @click=${() => setCount(count + 1)}>
      Increment Count : ${count}
    </button>
    <button @click=${() => setShowTodo(!showTodo, ["render"])}>
      ToggleTodo
    </button>
    <div>App</div>
    ${showTodo ? $(Todo, { count }) : ""}
  `;
}

export default App;

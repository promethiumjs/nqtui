import {
  html,
  $,
  adaptFunction,
  adaptState,
  adaptEffect,
  adaptInstantEffect,
} from "nqtui";
import { adaptEntity, adaptDerivative, adaptDerivativeState } from "nqtx";
import Todo from "./Todo";

function App() {
  const [count, setCount] = adaptState(0);
  const [showTodo, setShowTodo] = adaptState(true);
  const $entity = adaptEntity();
  const render = adaptFunction(["render"]);

  adaptInstantEffect(() => {
    const $derivative = $entity.derivative({
      id: "derivedCount1",
      previousState: true,
      transform: ({ getState, getPreviousState, state }) => {
        const prevCount = getPreviousState("count-1");
        const count = getState("count-1");

        if (state || state === 0) return count + state;
        else return 0;
      },
    });

    return () => $derivative.detonate();
  }, []);

  const [, $derivedCount] = adaptDerivative("derivedCount1");
  const derivedCount = adaptDerivativeState("derivedCount");

  adaptEffect(() => {
    const unsub = $derivedCount.subscribe((newState, oldState) =>
      console.log("derivative subscription here", newState, oldState)
    );

    return () => unsub();
  });

  console.log("App");

  return html`
    <div>dCount: ${$derivedCount.get()}</div>
    <div>no2: ${derivedCount}</div>
    <div>prevDerivedCount: ${$derivedCount.previous}</div>
    <button @click=${render}>Render</button>
    <button @click=${() => setCount(count + 1)}>
      Increment Count : ${count}
    </button>
    <button @click=${() => setShowTodo(!showTodo, ["render"])}>
      ToggleTodo
    </button>
    <div>App</div>
    ${showTodo ? $(Todo) : ""}
  `;
}

export default App;

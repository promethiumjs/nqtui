import { html, $, adaptEffect, adaptInstantEffect, adaptState } from "nqtui";
import { adaptEntity, adaptParticle } from "nqtx";
import TodoList from "./TodoList";

function Todo({ parent }) {
  const entity = adaptEntity();
  const [showList, setShowList] = adaptState(true);
  const [count, setCount] = adaptState(0);

  const [particleCount, $particleCount] = adaptParticle("count-1");

  adaptEffect(() => {
    return () => $particleCount.detonate();
  }, [$particleCount]);

  adaptEffect(() => {
    const unsub = $particleCount.subscribe_instant((newState) => {
      console.log("particle subscription here", newState);
    });

    return () => unsub();
  }, []);

  console.log("Todo");
  return html` <button
      @click=${() => $particleCount.mutate("inc", { jump: 10 })}
    >
      particleCount: ${particleCount}
    </button>
    <div>prevParticleCount: ${$particleCount.previous}</div>
    <button @click=${() => setShowList(!showList)}>ToggleList</button>
    <button @click=${() => setCount(count + 1)}>IncCount: ${count}</button>
    <div>${showList ? $(TodoList) : ""}</div>`;
}

export default Todo;

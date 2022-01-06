import { html, $, adaptEffect, adaptInstantEffect, adaptState } from "nqtui";
import { adaptEntity, adaptParticle } from "nqtx";
import TodoList from "./TodoList";

function Todo({ count: count2, parent }) {
  const entity = adaptEntity();
  const [showList, setShowList] = adaptState(true);

  adaptInstantEffect(() => {
    entity.particle({
      id: "count",
      initialState: 0,
      mutator: {
        inc({ state, payload }) {
          return state + payload.jump;
        },
      },
    });
  }, []);

  const [particleCount, $particleCount] = adaptParticle("count");

  adaptEffect(() => {
    $particleCount.subscribe((newState) => {
      console.log("particle subscription here", newState);
      console.log($particleCount.get());
    });
  }, [$particleCount]);

  console.log("Todo");
  return html` <div>${count2}</div>
    <button @click=${() => $particleCount.mutate("inc", { jump: 10 })}>
      particleCount: ${$particleCount.state}
    </button>
    <button @click=${() => setShowList(!showList)}>ToggleList</button>
    <div>${showList ? $(TodoList) : ""}</div>`;
}

export default Todo;

import {
  html,
  $,
  adaptCallback,
  adaptState,
  adaptEffect,
  adaptInstantEffect,
  adaptInvocationEffect,
} from "nqtui";
import {
  adaptTrigger,
  adaptEntity,
  adaptParticle,
  adaptDerivative,
} from "nqtx";
import TodoList from "./TodoList";

function Todo({ count: count2, parent }) {
  const trigger = adaptTrigger("firstTrigger");
  const entity = adaptEntity();

  adaptInstantEffect(() => {
    const trigger = entity.trigger({
      id: "secondTrigger",
    });

    const unsub = trigger.subscribe(() => {
      console.log("secondTrigger");
    });

    return () => {
      unsub();
      trigger.detonate();
    };
  }, []);

  adaptInstantEffect(() => {
    const derivative = entity.derivative({
      id: "derivedCount1",
      transform: ({ get, payload }) => {
        const animal = get("count");

        return animal + payload.jump;
      },
    });

    return () => derivative.detonate();
  }, []);

  const secondTrigger = adaptTrigger("secondTrigger");
  const particleCount = adaptParticle("count");

  adaptEffect(() => {
    particleCount.subscribe(() => console.log("particle subscription here"));
  }, []);

  console.log("Todo");
  return html` <div>${count2}</div>
    <button @click=${() => particleCount.mutate("inc", { jump: 10 })}>
      particleCount: ${particleCount.state}
    </button>
    <button @click=${trigger.invoke}>firstTrigger</button>
    <button @click=${secondTrigger.invoke}>secondTrigger</button>
    <div>${$(TodoList)}</div>`;
}

export default Todo;

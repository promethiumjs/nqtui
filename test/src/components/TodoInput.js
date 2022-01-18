import { html } from "nqtui";
import { adaptEntity, adaptParticle, adaptCatalyst } from "nqtx";

function TodoInput() {
  const $entity = adaptEntity();
  const [count2, $count2] = adaptParticle("count-2");
  const $incCount = adaptCatalyst("inc-cat");

  console.log("TodoInput");

  return html`
    <button @click=${() => $count2.set(count2 + 1)}>Count2: ${count2}</button>
    <button
      @click=${() => console.log($incCount.dispatch("inc", { jump: 30 }))}
    >
      Dispactch
    </button>
    <button @click=${() => $entity.setParticleStates({ ["count-1"]: "red" })}>
      SetCount1
    </button>
  `;
}

export default TodoInput;

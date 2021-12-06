import {
  html,
  adaptEvents,
  adaptUnifiedState,
  adaptEffect,
  adaptMemo,
} from "nqtui";

const Container = ({ $click }) => {
  const [state, setState] = adaptUnifiedState({ count: 0, firstTime: false });

  const emitClick = adaptEvents([$click]);
  const emitRender = adaptEvents(["render"]);

  const memo = adaptMemo(() => {
    console.log("memo fired");
    return 6;
  }, [state.firstTime]);

  adaptEffect(
    () => {
      console.log("effect fired");
      setState({ count: 15 }, [() => emitClick(state.count)]);

      return () => console.log(3);
    },
    [state.firstTime],
    true
  );

  console.log("here");

  return html` <button @click=${emitRender}>Render</button>
    <button @click=${() => emitClick(state.count)}>Toggle</button>
    <button @click=${() => setState({ count: state.count + 1 })}>
      ${state.count}
    </button>
    <button @click=${() => setState({ firstTime: !state.firstTime })}>
      ${state.firstTime}
    </button>`;
};

export default Container;

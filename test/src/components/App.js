import { html, $, adaptState } from "nqtui";
import Container from "./Container";

const App = () => {
  const [visible, setVisibilty] = adaptState(true);

  const content = visible
    ? $(Container, {
        $click: (count) => console.log(count),
      })
    : "";
  return html`<div>${content}</div>`;
};

export default App;

import { html, $ } from "nqtui";
import Container from "./Container";

const App = () => {
  return html`<div>
    ${$(Container, {
      $click: () => console.log("clicked"),
      $noop: () => console.log("nooped"),
    })}
  </div>`;
};

export default App;

import { html, $ } from "nqtui";
import Container from "./Container";

const App = () => {
  return html`<div>
    ${$(Container, {
      $click: ({ increment }) => console.log("clicked", increment),
      $noop: ({ increment }) => console.log("nooped", increment),
    })}
  </div>`;
};

export default App;

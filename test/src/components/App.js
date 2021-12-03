import { html, $ } from "nqtui";
import Container from "./Container";

const App = () => {
  return html`<div>
    ${$(Container, {
      $click: (count) => console.log("clicked", count),
      $noop: (count) => console.log("nooped", count),
    })}
  </div>`;
};

export default App;

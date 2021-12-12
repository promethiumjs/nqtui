import { html, $, adaptEvents } from "nqtui";
import Todo from "./Todo";

function App() {
  const render = adaptEvents();

  return html`
    <button @click=${render}>Render</button>
    <div>App</div>
    ${$(Todo)}
  `;
}

export default App;

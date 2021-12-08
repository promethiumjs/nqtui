import { html, $, adaptState } from "nqtui";
import Todo from "./Todo";

const App = () => {
  return html`${$(Todo)}`;
};

export default App;

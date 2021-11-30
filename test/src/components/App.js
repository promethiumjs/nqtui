import { $, h } from "nqtui";
import Container from "./Container";

const App = () => {
  return h` <div>${$(Container)} Hello World, From Italy</div> `;
};

export default App;

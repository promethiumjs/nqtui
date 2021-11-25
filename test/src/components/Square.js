import { Component, html } from "nqtui";
import "../css/Square.css";

export default class Square extends Component {
  template() {
    return html`
      <button
        class="game__board-square"
        @click=${() => {
          this.props.onClick();
        }}
      >
        ${this.props.value}
      </button>
    `;
  }
}

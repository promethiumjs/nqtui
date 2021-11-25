import { Component, html } from "nqtui";
import Square from "./Square";
import "../css/Board.css";

export default class Board extends Component {
  addChildNodes($, $s) {
    for (let i = 0; i < 9; i++) {
      $s(Square, "Squares", {
        value: this.props.squares[i],
        onClick: () => this.props.onClick(i),
      });
    }
  }

  template($) {
    return html`
      <div class="game__board">
        <div class="game__board-row">
          ${$.Squares[0].$()} ${$.Squares[1].$()} ${$.Squares[2].$()}
        </div>
        <div class="game__board-row">
          ${$.Squares[3].$()} ${$.Squares[4].$()} ${$.Squares[5].$()}
        </div>
        <div class="game__board-row">
          ${$.Squares[6].$()} ${$.Squares[7].$()} ${$.Squares[8].$()}
        </div>
      </div>
    `;
  }
}

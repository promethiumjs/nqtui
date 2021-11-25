import { Component, html } from "nqtui";
import Board from "./Board.js";
import "../css/Game.css";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  addChildNodes($) {
    $(Board, "Board");
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";

    this.addState(
      {
        history: history.concat([{ squares }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
      },
      ["renderRoot"]
    );
  }

  jumpTo(step) {
    this.addState(
      {
        stepNumber: step,
        xIsNext: step % 2 === 0,
      },
      ["renderRoot"]
    );
  }

  template($) {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;

    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return html`
        <li class="game__travel-list-item">
          <button class="game__travel-button" @click=${() => this.jumpTo(move)}>
            ${desc}
          </button>
        </li>
      `;
    });

    return html` <div class="game">
      <div class="game__board">
        ${$.Board.$({
          squares: current.squares,
          onClick: (i) => this.handleClick(i),
        })}
      </div>
      <div class="game__info">
        <div class="game__status">${status}</div>
        <ol class="game__travel-list">
          ${moves}
        </ol>
      </div>
    </div>`;
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

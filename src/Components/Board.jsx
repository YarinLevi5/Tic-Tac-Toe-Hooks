import React, { useState } from "react";
import Square from "./Square";

const rowStyle = {
  display: "flex",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "480px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState("");

  const clickOnTheNullSquare = (i) => {
    const copiedBoard = [...board];
    if (checkWinner(copiedBoard) || copiedBoard[i]) {
      return setWinner(checkWinner(copiedBoard));
    }
    copiedBoard[i] = player ? "X" : "O";
    setPlayer(!player);
    setBoard(copiedBoard);
  };

  const checkWinner = (board) => {
    const row = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < row.length; i++) {
      const [r, o, w] = row[i];
      if (board[r] && board[r] === board[o] && board[r] === board[w]) {
        return board[r];
      }
    }
    return null;
  };

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>
        Next player: <span>{player ? "X" : "O"}</span>
      </div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>
        Winner: <span>{winner}</span>
      </div>
      <button style={buttonStyle} onClick={() => setBoard(Array(9).fill(null))}>
        Reset
      </button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square value={board[0]} click={() => clickOnTheNullSquare(0)} />
          <Square value={board[1]} click={() => clickOnTheNullSquare(1)} />
          <Square value={board[2]} click={() => clickOnTheNullSquare(2)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={board[3]} click={() => clickOnTheNullSquare(3)} />
          <Square value={board[4]} click={() => clickOnTheNullSquare(4)} />
          <Square value={board[5]} click={() => clickOnTheNullSquare(5)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={board[6]} click={() => clickOnTheNullSquare(6)} />
          <Square value={board[7]} click={() => clickOnTheNullSquare(7)} />
          <Square value={board[8]} click={() => clickOnTheNullSquare(8)} />
        </div>
      </div>
    </div>
  );
}

export default Board;

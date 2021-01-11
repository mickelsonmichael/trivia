import React from "react";
import "./board.css";

const answers = [
  "Thomas Jefferson",
  "Benjamin Franklin",
  "George Washington",
  "George Bush",
];

const Board = () => (
  <div className="board">
    <div className="board__question">
      Who was the first president of the United States?
    </div>
    <div className="board__answers">
      {answers.map((a) => (
        <div className="board__answers__answer">{a}</div>
      ))}
    </div>
  </div>
);

export default Board;

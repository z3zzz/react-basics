import React, { useState, useEffect } from "react";
import "./math-problem.css";

// GameStatus를 이용해 상태를 처리합니다.
const GameStatus = {
  CORRECT: "정답입니다!",
  INCORRECT: "정답이 아닙니다..",
  READY: "",
};

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

function MathProblem() {
  // 필요한 숫자의 상태를 정의하세요.
  const [gameStatus, setGameStatus] = useState(GameStatus.READY);
  const [inputValue, setInputValue] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [isHidden, setIsHidden] = useState(true);

  const generateProblem = () => {
    setGameStatus(GameStatus.READY);
    // generateRandomNumber를 이용해 새로 숫자를 생성하세요.
    setNum1(generateRandomNumber);
    setNum2(generateRandomNumber);
    setIsHidden(true);
  };

  const handleSubmit = () => {
    // 제출시 정답 여부에 따라 GameStatus의 상태를 설정하세요.
    const answer = num1 + num2;
    console.log(answer, inputValue);
    if (inputValue === answer) {
      setGameStatus(GameStatus.CORRECT);
      setIsHidden(false);
    } else {
      setGameStatus(GameStatus.INCORRECT);
    }
  };

  const handleAnswerInput = (e) => {
    setInputValue(parseInt(e.target.value));
  };

  useEffect(() => {
    generateProblem();
  }, []);

  // 실행 결과와 동일한 기능을 하도록 마크업을 작성하세요.
  return (
    <div className="problem-card">
      <div className="problem">
        <span>{num1}</span>
        <span>&nbsp;+&nbsp;</span>
        <span>{num2}</span>
      </div>

      <hr />

      <div className="user-input-card">
        <span> = </span>
        <input
          className="user-input"
          id="answer"
          type="number"
          name="answer"
          onChange={handleAnswerInput}
        />
        <button className="submit-button" onClick={handleSubmit}>
          제출
        </button>
      </div>

      <div className="game-result">{gameStatus}</div>

      <div>
        {!isHidden && (
          <button className="make-problem-button" onClick={generateProblem}>
            문제 생성
          </button>
        )}
      </div>
    </div>
  );
}

export default MathProblem;

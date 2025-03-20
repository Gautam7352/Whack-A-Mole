import React, { useState, useEffect } from 'react';

const Game = ({ setCurrentScore, currentScore }) => {
  const [moles, setMoles] = useState(Array(9).fill(false));
  const [gameActive, setGameActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const startGame = () => {
    setGameActive(true);
    setCurrentScore(0);
    setTimeLeft(30);
  };

  useEffect(() => {
    let moleInterval;
    let timeInterval;

    if (gameActive && timeLeft > 0) {
      moleInterval = setInterval(() => {
        const newMoles = Array(9).fill(false);
        const randomMole = Math.floor(Math.random() * 9);
        newMoles[randomMole] = true;
        setMoles(newMoles);
      }, 1000);

      timeInterval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    if (timeLeft === 0) {
      setGameActive(false);
    }

    return () => {
      clearInterval(moleInterval);
      clearInterval(timeInterval);
    };
  }, [gameActive, timeLeft]);

  const whackMole = (index) => {
    if (moles[index] && gameActive) {
      setCurrentScore((prev) => prev + 10);
      const newMoles = [...moles];
      newMoles[index] = false;
      setMoles(newMoles);
    }
  };

  return (
    <div className="game">
      <div className="game-info">
        <p>Time Left: {timeLeft}s</p>
        <p>Score: {currentScore}</p>
        {!gameActive && (
          <button onClick={startGame}>
            {timeLeft === 30 ? 'Start Game' : 'Play Again'}
          </button>
        )}
      </div>
      <div className="game-grid">
        {moles.map((isMole, index) => (
          <div
            key={index}
            className={`hole ${isMole ? 'mole' : ''}`}
            onClick={() => whackMole(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;

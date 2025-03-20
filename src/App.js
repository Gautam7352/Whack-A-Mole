import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="App">
      <h1>Whack-A-Mole</h1>
      <div className="game-container">
        <Game setCurrentScore={setCurrentScore} currentScore={currentScore} />
        <Scoreboard currentScore={currentScore} />
      </div>
    </div>
  );
}

export default App;

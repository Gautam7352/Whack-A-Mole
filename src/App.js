/**
 * Whack-A-Mole Game
 * Main App Component
 * 
 * A classic whack-a-mole game implementation using React
 * Features score tracking and high score management
 * 
 * @author Gautam Kumar
 * @version 1.0.0
 */

import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';

/**
 * Main App component that manages the game state and layout
 * Uses React hooks for state management
 */
function App() {
  // Track current game score
  const [currentScore, setCurrentScore] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Whack-A-Mole</h1>
        <p className="author">Created by Gautam Kumar</p>
      </header>
      <div className="game-container">
        <Game setCurrentScore={setCurrentScore} currentScore={currentScore} />
        <Scoreboard currentScore={currentScore} />
      </div>
      <footer>
        <p>&copy; {new Date().getFullYear()} Gautam Kumar.</p>
      </footer>
    </div>
  );
}

export default App;

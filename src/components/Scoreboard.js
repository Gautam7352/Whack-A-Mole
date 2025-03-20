import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Scoreboard = ({ currentScore }) => {
  const [highScores, setHighScores] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [showSubmit, setShowSubmit] = useState(false);

  useEffect(() => {
    fetchHighScores();
  }, []);

  const fetchHighScores = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/scores');
      setHighScores(response.data);
    } catch (error) {
      console.error('Error fetching high scores:', error);
    }
  };

  const submitScore = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/scores', {
        playerName,
        score: currentScore
      });
      setPlayerName('');
      setShowSubmit(false);
      fetchHighScores();
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  return (
    <div className="scoreboard">
      <h2>High Scores</h2>
      {showSubmit && (
        <form onSubmit={submitScore}>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            required
          />
          <button type="submit">Submit Score</button>
        </form>
      )}
      <div className="scores-list">
        {highScores.map((score, index) => (
          <div key={score._id} className="score-item">
            <span>{index + 1}.</span>
            <span>{score.playerName}</span>
            <span>{score.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scoreboard;

import React from "react";

function DifficultySelector({ difficulty, setDifficulty }) {
  return (
    <div>
      <label>רמת קושי:</label>
      <br />
      {["קל", "בינוני", "קשה"].map((level) => (
        <label key={level} style={{ display: "block" }}>
          <input
            type="radio"
            name="difficulty"
            value={level}
            checked={difficulty === level}
            onChange={(e) => setDifficulty(e.target.value)}
          />
          {level}
        </label>
      ))}
    </div>
  );
}

export default DifficultySelector;
// This component allows the user to select a difficulty level for the trip.
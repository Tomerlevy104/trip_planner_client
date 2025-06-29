import React from "react";

function PreferencesCheckboxes({ preferences, handlePreferenceChange }) {
  return (
    <div>
      <label>העדפות מיוחדות:</label>
      <br />
      {["קמפינג", "חניה קרובה", "נגישות לנכים", "מאגרי מים"].map((pref) => (
        <label key={pref} style={{ display: "block" }}>
          <input
            type="checkbox"
            value={pref}
            checked={preferences.includes(pref)}
            onChange={handlePreferenceChange}
          />
          {pref}
        </label>
      ))}
    </div>
  );
}

export default PreferencesCheckboxes;
// This component allows the user to select preferences for the trip.
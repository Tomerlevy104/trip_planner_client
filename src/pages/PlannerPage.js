import React, { useState } from "react";
import DifficultySelector from "../components/DifficultySelector";
import PreferencesCheckboxes from "../components/PreferencesCheckboxes";
import FormStringInput from "../components/FormStringInput";
import FormDDLInput from "../components/FormDDLInput";

function PlannerPage() {
  const [tripName, setTripName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [participants, setParticipants] = useState(1);
  const [tripType, setTripType] = useState("בחר");
  const [budget, setBudget] = useState("");
  const [preferences, setPreferences] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const participantsOptions = Array.from({ length: 20 }, (_, i) => `${i + 1}`);
  const citiesByCountry = {
    ישראל: ["תל אביב", "ירושלים", "חיפה"],
    יפן: ["טוקיו", "קיוטו", "אוסקה"],
    צרפת: ["פריז", "ניס", "ליון"],
    'ארה"ב': ["ניו יורק", "לוס אנג׳לס", "סן פרנסיסקו"],
  };

  const handlePreferenceChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setPreferences([...preferences, value]);
    } else {
      setPreferences(preferences.filter((pref) => pref !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("שם הטיול:", tripName);
    console.log("מדינה:", country);
    console.log("עיר:", city);
    console.log("משתתפים:", participants);
    console.log("סוג הטיול:", tripType);
    console.log("תקציב:", budget);
    console.log("העדפות:", preferences);
    console.log("רמת קושי:", difficulty);
    alert("הטיול נשמר (לצורך הדגמה בלבד)");
  };

  return (
    <div dir="rtl" style={{ padding: "20px" }}>
      <h1>תכנון מסלול</h1>
      <form onSubmit={handleSubmit}>

        <FormStringInput
          label="שם הטיול:"
          type="text"
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
          placeholder="למשל: טיול אופניים באיזור הצפון"
        />

        <FormDDLInput
          label="מדינה:"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setCity("");
          }}
          options={Object.keys(citiesByCountry)}
          required
        />

        <FormDDLInput
          label="עיר יעד:"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          options={country ? citiesByCountry[country] : []}
          required
          disabled={!country}
        />

        <FormDDLInput
          label="מספר משתתפים:"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
          options={participantsOptions}
          required
        />

        <FormDDLInput
          label="סוג הטיול:"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          options={["טיול רגלי", "טיול אופניים"]}
          required
        />

        <FormDDLInput
          label="תקציב משוער:"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          options={[
            '0–100 ש"ח',
            '100–200 ש"ח',
            '200–300 ש"ח',
            '300–400 ש"ח',
            '400–500 ש"ח',
            'מעל 500 ש"ח',
          ]}
          required
        />

        <DifficultySelector
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />

        <PreferencesCheckboxes
          preferences={preferences}
          handlePreferenceChange={handlePreferenceChange}
        />

        <button type="submit">צור מסלול</button>
      </form>
    </div>
  );
}

export default PlannerPage;
// This is the PlannerPage component that allows users to plan a trip.

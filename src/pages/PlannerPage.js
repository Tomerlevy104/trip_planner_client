import React, { useState, useEffect } from "react";
import FormStringInput from "../components/FormStringInput";
import FormDDLInput from "../components/FormDDLInput";
import "./style/PlannerPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlannerPage() {
  const [tripName, setTripName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [tripType, setTripType] = useState("בחר");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  // שליפת רשימת המדינות ברגע שהקומפוננטה נטענת
  useEffect(() => {
    async function fetchCountries() {
      try {
        const res = await axios.get("https://countriesnow.space/api/v0.1/countries/positions");
        const countryNames = res.data.data.map(c => c.name);
        setCountries(countryNames);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    }

    fetchCountries();
  }, []);

  // שליפת ערים לפי מדינה שנבחרה
  useEffect(() => {
    if (!country) {
      setCities([]);
      return;
    }

    async function fetchCities() {
      try {
        const res = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/cities",
          { country: country }
        );
        setCities(res.data.data);
      } catch (err) {
        console.error("Error fetching cities:", err);
        setCities([]);
      }
    }

    fetchCities();
  }, [country]);

  // שליחת הטופס לשרת
  const handleSubmit = async (event) => {
    event.preventDefault();

    const tripTypeMap = {
      "טיול אופניים": "bicycle",
      "טיול רגלי": "trek",
    };

    const tripTypeValue = tripTypeMap[tripType];

    if (!tripTypeValue) {
      alert("יש לבחור סוג טיול חוקי.");
      return;
    }

    try {
      const requestData = {
        tripName,
        tripType: tripTypeValue,
        country,
        city,
      };

      const token = localStorage.getItem("token");
      if (!token) {
        alert("לא נמצאה התחברות. נא להתחבר מחדש.");
        return;
      }

      const response = await axios.post("/api/trips/generate", requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Generated trip:", response.data);
      navigate("/tripoptions", { state: response.data.data });
    } catch (error) {
      console.error("Error generating trip:", error);
      alert("אירעה שגיאה ביצירת המסלול.");
    }
  };

  return (
    <div dir="rtl" className="planner-page">
      <h1>תכנון מסלול</h1>
      <form onSubmit={handleSubmit} className="planner-form">
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
          options={countries}
          required
        />

        <FormDDLInput
          label="עיר יעד:"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          options={cities}
          required
          disabled={!country}
        />

        <FormDDLInput
          label="סוג הטיול:"
          value={tripType}
          onChange={(e) => setTripType(e.target.value)}
          options={["טיול רגלי", "טיול אופניים"]}
          required
        />

        <button type="submit" className="planner-submit">
          צור מסלול
        </button>
      </form>
    </div>
  );
}

export default PlannerPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormStringInput from "../components/FormStringInput";

function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("הסיסמאות לא תואמות!");
      return;
    }
    console.log("User registered:", { firstName, lastName, email, password });
    alert("ההרשמה בוצעה בהצלחה (לצורך הדגמה בלבד)");
    navigate("/tripplanner");
  };

  return (
    <div dir="rtl" className="register-page" style={{ padding: "20px" }}>
      <h1>הרשמה</h1>
      <form onSubmit={handleSubmit}>
        <FormStringInput
          label="שם פרטי:"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormStringInput
          label="שם משפחה:"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormStringInput
          label="אימייל:"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormStringInput
          label="סיסמה:"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormStringInput
          label="אימות סיסמה:"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">הרשמה</button>
      </form>
    </div>
  );
}

export default RegisterPage;
// This is the RegisterPage component that allows users to register.
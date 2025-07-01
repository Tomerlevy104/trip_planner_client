import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormStringInput from "../components/FormStringInput";
import axios from "axios";
import validation from "../utils/validation";

import "./style/LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validation.validateEmail(email)) {
      alert("אנא הזן כתובת אימייל חוקית");
      return;
    }

    if (!validation.validatePassword(password)) {
      alert("הסיסמה חייבת להיות באורך של לפחות 6 תווים");
      return;
    }

    try {
      // Post request to the server for login
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("username", response.data.user.username);

      console.log("Login success:", response.data);

      // navigate to Home page
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      alert("פרטי ההתחברות שגויים או שהתרחשה שגיאה");
    }
  }

  return (
    <div dir="rtl" className="login-page">
      <h1>התחברות</h1>
      <form onSubmit={handleSubmit} className="login-form">
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
        <button type="submit" className="login-btn">
          התחבר
        </button>
      </form>
    </div>
  );
}

export default LoginPage;

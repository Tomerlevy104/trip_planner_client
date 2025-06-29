import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormStringInput from '../components/FormStringInput';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    //event.preventDefault(); // Prevent the default form submission behavior (prevent page reload)

    // Here in the future I will call the API
    // I will write the API call logic here
    // const response = await fetch('/api/login', { ... });
    // For now, just log the email and password (F12 to see the console output on the browser)
    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/tripplanner'); // For example – navigate to the planning page after logging in
  }

  return (
    <div dir = "rtl">
      <h1>התחברות</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">התחבר</button>
      </form>
    </div>
  );
}

export default LoginPage;
// This is the LoginPage component that allows users to log in.
import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home'; // Ensure this path is correct
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import EmailVerify from './Pages/EmailVerify';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Email-verify" element={<EmailVerify />} />
    </Routes>
  );
}

export default App;
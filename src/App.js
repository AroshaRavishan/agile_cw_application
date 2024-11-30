import { useState } from 'react'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Home'; // Ensure this path is correct
import SignIn from './Pages/SignIn';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
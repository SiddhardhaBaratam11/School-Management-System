import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin';
import Parents from './pages/Parents';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import './App.css'; 

function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/admin" element={<Admin/>} />
        <Route path="/parents" element={<Parents/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
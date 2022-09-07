import './App.css';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home'

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path='/contact' element={<Home />} />
        <Route path='/blogs' element={<Home />} />
        <Route path='/sign-up' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/pages/Home'
import Blogs from './components/pages/Blogs'
import Cart from './components/pages/Cart'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import LogOut from './components/pages/LogOut';
import Caligraphies from './components/pages/Caligraphies';
import Posters from './components/pages/Posters';
import CaligraphyDetail from './components/pages/CaligraphyDetail';
import PosterDetail from './components/pages/PosterDetail';

function App() {
  const[admin, setAdmin] = useState(null)
  const[user, setUser] = useState(null)
  const[caligraphies, setCaligraphies]= useState([])
  const[posters, setPosters] = useState([])
  const[blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/administration")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setAdmin(user));
      }
    });
  }, []);

  useEffect(() => fetch('/caligraphies').then(r => r.json()).then(data => setCaligraphies(data)), [])
  useEffect(() => fetch('/posters').then(r => r.json()).then(data => setPosters(data)), [])
  useEffect(() => fetch('/blogs').then(r => r.json()).then(data => setBlogs(data)), [])

  return (
    <div className="App">
      <Router>
      <Navbar user={user}/>
        <Routes>
          <Route exact path="/" element={<Home user={user}/>} />
          <Route path='/blogs' element={<Blogs blogs={blogs}/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/sign-up' element={<SignUp setUser={setUser} />} />
          <Route path='/sign-in' element={<SignIn setUser={setUser} setAdmin={setAdmin} /> } />
          <Route path='/log-out' element={<LogOut setUser={setUser} setAdmin={setAdmin}/>} />
          <Route path='/caligraphies' element={<Caligraphies caligraphies={caligraphies} />} />
          <Route path='/caligraphies/:id' element={<CaligraphyDetail />} />
          <Route path='/posters' element={<Posters  posters={posters} />} />
          <Route path='/posters/:id' element={<PosterDetail />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

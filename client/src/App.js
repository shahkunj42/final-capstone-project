import './App.css';
import React from 'react';
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/pages/Home'
import Blogs from './components/pages/Blogs'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import LogOut from './components/pages/LogOut';
import Caligraphies from './components/pages/Caligraphies';
import Posters from './components/pages/Posters';
import CaligraphyDetail from './components/pages/CaligraphyDetail';
import PosterDetail from './components/pages/PosterDetail';
import Administration from './components/pages/Administration';
import InquiryForm from './components/pages/InquiryForm';
import Inquiries from './components/pages/Inquiries';
import EditBlog from './components/EditBlog';

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

  function handleDeleteBlog(id) {
    const updateBlog = blogs.filter((blog) => id !== blog.id);
    setBlogs(updateBlog);
  }

  function handleDeletePoster(id) {
    const updatePosters = posters.filter((poster) => id !== poster.id);
    setPosters(updatePosters);
  }

  function handleDeleteCaligraphy(id){
    const updatedCalig = caligraphies.filter((caligraphy) => id !== caligraphy.id)
    setCaligraphies(updatedCalig)
  }

  function handleAddBlog(newBlog) {
    const updatedBlogsArray = [...blogs, newBlog]
    setBlogs(updatedBlogsArray)
  }

  function handleAddCaligraphy(newCaligraphy) {
    const updatedCaligraphiesArray = [...caligraphies, newCaligraphy]
    setCaligraphies(updatedCaligraphiesArray)
  }

  function handleAddPoster(newPoster) {
    const updatedPostersArray = [...posters, newPoster]
    setPosters(updatedPostersArray)
  }

  function handleUpdateBlogs(updatedBlogs) {
    const updatedBlogsArray = blogs.map((blog) => {
      if (blog.id === updatedBlogs.id) {
        return updatedBlogs;
      } else {
        return blog;
      }
    });
    setBlogs(updatedBlogsArray);
  }



  if(!admin && !user){
  return (
    <div className="App">
      <Router>
      <Navbar user={user} admin={admin}/>
        <Routes>
          <Route exact path="/" element={<Home user={user}/>} />
          <Route path='/blogs' element={<Blogs blogs={blogs} admin={admin}/>} />
          <Route path='/sign-up' element={<SignUp setUser={setUser} />} />
          <Route path='/sign-in' element={<SignIn setUser={setUser} setAdmin={setAdmin} /> } />
          <Route path='/log-out' element={<LogOut setUser={setUser} setAdmin={setAdmin}/>} />
          <Route path='/caligraphies' element={<Caligraphies caligraphies={caligraphies} />} />
          <Route path='/caligraphies/:id' element={<CaligraphyDetail admin={admin} user={user}/>} />
          <Route path='/posters' element={<Posters  posters={posters} />} />
          <Route path='/posters/:id' element={<PosterDetail admin={admin} user={user}/>} />
        </Routes>
      <Footer />
      </Router>
    </div>
  )
  }
  else if(user){
    return (
      <div className="App">
        <Router>
        <Navbar user={user} admin={admin}/>
          <Routes>
            <Route exact path="/" element={<Home user={user}/>} />
            <Route path='/blogs' element={<Blogs blogs={blogs} admin={admin}/>} />
            <Route path='/sign-up' element={<SignUp setUser={setUser} />} />
            <Route path='/sign-in' element={<SignIn setUser={setUser} setAdmin={setAdmin} /> } />
            <Route path='/log-out' element={<LogOut setUser={setUser} setAdmin={setAdmin}/>} />
            <Route path='/caligraphies' element={<Caligraphies caligraphies={caligraphies} />} />
            <Route path='/caligraphies/:id' element={<CaligraphyDetail admin={admin} user={user}/>} />
            <Route path='/posters' element={<Posters  posters={posters} />} />
            <Route path='/posters/:id' element={<PosterDetail admin={admin} user={user}/>} />
            <Route path='/inquire' element={<InquiryForm user={user} />} />
          </Routes>
        <Footer />
        </Router>
      </div>
    );
  }
  else if(admin){
    return (
      <div className="App">
        <Router>
        <Navbar user={user} admin={admin}/>
          <Routes>
            <Route exact path="/" element={<Home user={user}/>} />
            <Route path='/sign-up' element={<SignUp setUser={setUser} />} />
            <Route path='/sign-in' element={<SignIn setUser={setUser} setAdmin={setAdmin} /> } />
            <Route path='/log-out' element={<LogOut setUser={setUser} setAdmin={setAdmin}/>} />
            <Route path='/inquiries' element={<Inquiries />} />
            <Route path='/caligraphies/:id' element={<CaligraphyDetail admin={admin} handleDeleteCaligraphy={handleDeleteCaligraphy}/>} />
            <Route path='/posters/:id' element={<PosterDetail admin={admin} handlePosterDelete={handleDeletePoster}/>} />
            <Route path='/administration' element={<Administration setBlogs={handleAddBlog} setCaligraphies={handleAddCaligraphy} setPosters={handleAddPoster} />} />
            <Route path='/blogs' element={<Blogs blogs={blogs} admin={admin} handleDeleteBlog={handleDeleteBlog}/>} />
            <Route path='/posters' element={<Posters  posters={posters} />} />
            <Route path='/caligraphies' element={<Caligraphies caligraphies={caligraphies} />} />
            <Route path='/blogs/edit/:id' element={<EditBlog blog={blogs} setBlogs={handleUpdateBlogs}/>} />
          </Routes>
        <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

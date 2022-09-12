import React from 'react'
import BlogForm from '../BlogForm'
import CaligraphyForm from '../CaligraphyForm'
import PosterForm from '../PosterForm'

function Administration({setPosters, setCaligraphies, setBlogs}) {

  return (
    <div>
      <br></br>
      <BlogForm setBlogs={setBlogs}/>
      <br></br>
      <CaligraphyForm setCaligraphies={setCaligraphies}/>
      <br></br>
      <PosterForm setPosters={setPosters}/>
    </div>
  )
}

export default Administration
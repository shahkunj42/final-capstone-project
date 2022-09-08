import React from 'react'
import BlogsContainer from '../BlogsContiner'

function Blogs({blogs}) {
  let blogList = blogs.map(blog => <BlogsContainer key={blog.id} blog={blog}/>)
  return (
    <div>{blogList}</div>
  )
}

export default Blogs
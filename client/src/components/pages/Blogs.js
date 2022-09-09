import React from 'react'
import BlogsContainer from '../BlogsContiner'

function Blogs({blogs, admin, handleDeleteBlog}) {
  let blogList = blogs.map(blog => <BlogsContainer key={blog.id} blog={blog} admin={admin} handleDeleteBlog={handleDeleteBlog}/>)
  return (
    <div>{blogList}</div>
  )
}

export default Blogs
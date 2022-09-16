import React from 'react'
import BlogsContainer from '../BlogsContiner'
import { Grid } from 'semantic-ui-react'

function Blogs({blogs, admin, handleDeleteBlog}) {
  let blogList = blogs.map(blog => <BlogsContainer key={blog.id} blog={blog} admin={admin} handleDeleteBlog={handleDeleteBlog}/>)
  return (

    <div>
      <Grid padded='vertically'>
      {blogList.reverse()}
      </Grid>
    </div>
  )
}

export default Blogs
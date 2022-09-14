import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Header, Button, Icon, Grid } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

const BlogsContainer = ({blog, admin, handleDeleteBlog}) => {

    const navigate = useNavigate()

    const{title, header_image, content, id} = blog

    // function handleDelete(){
    //   fetch(`/blogs/${id}`, {method: 'DELETE'}).then(res => res.json()).then(() => handleDeleteBlog(blog))
    // }

    function handleDelete() {
      fetch(`/blogs/${id}`, {
        method: "DELETE",
      }).then(handleDeleteBlog(id)).then(navigate('/blogs'));
    }

  if(!admin){
    return(
      <Grid.Row>
      <Container text>
        <Image src={header_image} fluid />
        <Header as='h2'>{title}</Header>
        <p>{content}</p>
      </Container>
      </Grid.Row>
    )
    }
    else{
      return(
        <div>
        <Grid.Row>
        <Container text>
          <Image src={header_image} fluid />
          <Header as='h2'>{title}</Header>
          <p>{content}</p>
          <div>
          <Button animated='fade' size='massive' onClick={handleDelete}>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
                <Icon name='trash alternate' />
            </Button.Content>
          </Button>
          <Link to={`/blogs/edit/${id}`}>
          <Button animated='fade' size='massive'>
            <Button.Content hidden>Edit</Button.Content>
            <Button.Content visible>
                <Icon name='edit outline' />
            </Button.Content>
          </Button>
          </Link>
          </div>
        </Container> 
        </Grid.Row> 
  </div>
    )}
}

export default BlogsContainer
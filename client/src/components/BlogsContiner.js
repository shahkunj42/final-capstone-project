import React from 'react'
import { Container, Header, Button, Icon } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

const BlogsContainer = ({blog, admin, handleDeleteBlog}) => {

    const{title, header_image, content, id} = blog

    // function handleDelete(){
    //   fetch(`/blogs/${id}`, {method: 'DELETE'}).then(res => res.json()).then(() => handleDeleteBlog(blog))
    // }

    function handleDelete() {
      fetch(`/blogs/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          handleDeleteBlog(id);
        }
      });
    }

  if(!admin){
    return(
      <Container text>
        <Image src={header_image} fluid />
        <Header as='h2'>{title}</Header>
        <p>{content}</p>
      </Container>
    )
    }
    else{
      return(
        <div>
        <Container text>
          <Image src={header_image} fluid />
          <Header as='h2'>{title}</Header>
          <p>{content}</p>
          <Button animated='fade' size='massive' onClick={handleDelete}>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
                <Icon name='trash alternate' />
            </Button.Content>
          </Button>
        </Container>  
  </div>
    )}
}

export default BlogsContainer
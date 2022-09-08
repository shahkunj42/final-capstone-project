import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

const BlogsContainer = ({blog}) => {
    const{title, header_image, content} = blog
    return(
  <Container text>
    <Image src={header_image} fluid />
    <Header as='h2'>{title}</Header>
    <p>{content}</p>
  </Container>
    )
}

export default BlogsContainer
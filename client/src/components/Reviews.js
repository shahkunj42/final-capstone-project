import React from 'react'
import { Container, Header } from 'semantic-ui-react'

function Reviews({rv}) {
    const{rating, review} = rv
  return (
    <Container text>
    <Header as='h2'>{rating}</Header>
    <p>{review}</p>
  </Container>
  )
}

export default Reviews
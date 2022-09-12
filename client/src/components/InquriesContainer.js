import React from 'react'
import { Container, Header } from 'semantic-ui-react'

function InquriesContainer({inqury}) {

  return (
    <Container text>
        <Header as='h2'>{inqury.service}</Header>
        <p>{inqury.description}</p>
        <p>{inqury.username}</p>
        <p>{inqury.name}</p>
        <p>{inqury.email}</p>
    </Container>
  )
}

export default InquriesContainer
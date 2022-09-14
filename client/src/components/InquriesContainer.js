import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'

function InquriesContainer({inqury}) {

  return (
    <Grid.Row>
    <Container text>
        <Header as='h2'>{inqury.service}</Header>
        <p>{inqury.description}</p>
        <p>{inqury.username}</p>
        <p>{inqury.name}</p>
        <p>{inqury.email}</p>
    </Container>
    </Grid.Row>
  )
}

export default InquriesContainer
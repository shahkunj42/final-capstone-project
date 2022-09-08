import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'

const CaligraphyDetail = () => {
  const [caligraphy, setCaligraphy] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    fetch(`/caligraphies/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setCaligraphy(data);
      });
  }, [id]);

  if(!caligraphy) return <h1>Loading</h1>

  return(
    <div>
    <Container text>
        <Image src={caligraphy.image_url} fluid />
        <Header as='h2'>{caligraphy.title}</Header>
        <p>{caligraphy.description}</p>
        <h3>$ {caligraphy.price}</h3>
        <Button animated='fade' size='massive' attached='bottom'>
            <Button.Content hidden>Add to Cart</Button.Content>
            <Button.Content visible>
                <Icon name='shop' />
            </Button.Content>
        </Button>
    </Container>
    </div>
  )
  }

  export default CaligraphyDetail
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import ReviewContainer from '../ReviewContainer';

const PosterDetail = () => {
  const [poster, setPoster] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    fetch(`/posters/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setPoster(data);
      });
  }, [id]);

  if(!poster) return <h1>Loading</h1>

    return(
        <div>
        <Container text>
            <Image src={poster.image_url} fluid />
            <Header as='h2'>{poster.title}</Header>
            <p>{poster.description}</p>
            <h3>$ {poster.price}</h3>
            <Button animated='fade' size='massive' attached='bottom'>
                <Button.Content hidden>Add to Cart</Button.Content>
                <Button.Content visible>
                    <Icon name='shop' />
                </Button.Content>
            </Button>
        </Container>
        <br></br>
        <h1>Reviews!</h1>
        <ReviewContainer reviews={poster.reviews} />
        </div>
    )
    }
  export default PosterDetail
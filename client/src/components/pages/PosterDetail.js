import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import ReviewContainer from '../ReviewContainer';
import {useNavigate} from 'react-router-dom'

const PosterDetail = ({admin, handlePosterDelete}) => {
  const [poster, setPoster] = useState(null);
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/posters/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setPoster(data);
      });
  }, [id]);

  function handleDelete() {
    fetch(`/posters/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        handlePosterDelete(id);
      }
    })
    .then(navigate('/posters'));
  }

  if(!poster) {return(<h1>loading</h1>)}
  
  else if(!admin){
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

    else if (admin) {
      return(
        <div>
        <Container text>
            <Image src={poster.image_url} fluid />
            <Header as='h2'>{poster.title}</Header>
            <p>{poster.description}</p>
            <h3>$ {poster.price}</h3>
            <Button animated='fade' size='massive' onClick={handleDelete}>
                <Button.Content hidden>Delete</Button.Content>
                <Button.Content visible>
                    <Icon name='trash alternate' />
                </Button.Content>
            </Button>
        </Container>
        <br></br>
        <h1>Reviews!</h1>
        <ReviewContainer reviews={poster.reviews} />
        </div>

    )}
  }
  export default PosterDetail
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import ReviewContainer from '../ReviewContainer';

const PosterDetail = ({admin, handlePosterDelete, user}) => {
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
    }).then(handlePosterDelete(id)).then(navigate('/posters'))}

  if(!poster) {return(<h1>loading</h1>)}
  
  else if(user){
    return(
        <div>
        <Container text>
            <Image src={poster.image_url} fluid />
            <Header as='h2'>{poster.title}</Header>
            <p>{poster.description}</p>
            <h3>$ {poster.price}</h3>
            <Button animated='fade' size='massive' attached='bottom'>
                <Button.Content visible>Click Here To Inquire</Button.Content>
                <Button.Content hidden>
                    Inquire <Icon name='comment alternate outline' />
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
    else {
      return(
        <div>
        <Container text>
            <Image src={poster.image_url} fluid />
            <Header as='h2'>{poster.title}</Header>
            <p>{poster.description}</p>
            <h3>$ {poster.price}</h3>
            <Link to= '/sign-in'>
            <Button animated='fade' size='massive' attached='bottom'>
                <Button.Content visible>Sign In To Inquire</Button.Content>
                <Button.Content hidden>
                    Sign in
                </Button.Content>
            </Button>
            </Link>
        </Container>
        <br></br>
        <h1>Reviews!</h1>
        <ReviewContainer reviews={poster.reviews} />
        </div>
    )
    }
  }
  export default PosterDetail
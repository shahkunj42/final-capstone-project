import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import ReviewContainer from '../ReviewContainer';

const CaligraphyDetail = ({admin, handleDeleteCaligraphy, user}) => {
  const [caligraphy, setCaligraphy] = useState(null);
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/caligraphies/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setCaligraphy(data);
      });
  }, [id]);

  function handleDelete() {
    fetch(`/caligraphies/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        handleDeleteCaligraphy(id);
      }
    })
    .then(navigate('/caligraphies'));
  }

  if(!caligraphy) return <h1>Loading</h1>

  else if(user){
  return(
    <div>
    <Container text>
        <Image src={caligraphy.image_url} fluid />
        <Header as='h2'>{caligraphy.title}</Header>
        <p>{caligraphy.description}</p>
        <h3>$ {caligraphy.price}</h3>
        <Button animated='fade' size='massive' attached='bottom'>
            <Button.Content visible>Click Here To Inquire</Button.Content>
            <Button.Content hidden>
                Inquire <Icon name='comment alternate outline' />
            </Button.Content>
        </Button>
    </Container>
      <br></br>
        <h1>Reviews!</h1>
        <ReviewContainer reviews={caligraphy.reviews} />
    </div>
  )
  }
  else if(admin){
  return(
    <div>
    <Container text>
        <Image src={caligraphy.image_url} fluid />
        <Header as='h2'>{caligraphy.title}</Header>
        <p>{caligraphy.description}</p>
        <h3>$ {caligraphy.price}</h3>
        <Button animated='fade' size='massive' onClick={handleDelete}>
            <Button.Content hidden>Delete</Button.Content>
            <Button.Content visible>
                <Icon name='trash alternate' />
            </Button.Content>
        </Button>
      </Container>
        <br></br>
        <h1>Reviews!</h1>
        <ReviewContainer reviews={caligraphy.reviews} />
    </div>
  )
  }
  else {
    return(
      <div>
      <Container text>
          <Image src={caligraphy.image_url} fluid />
          <Header as='h2'>{caligraphy.title}</Header>
          <p>{caligraphy.description}</p>
          <h3>$ {caligraphy.price}</h3>
          <Link to='/sign-in'>
          <Button animated='fade' size='massive' attached='bottom'>
              <Button.Content hidden>Sign In</Button.Content>
              <Button.Content visible>
                  Sign in To Inquire
              </Button.Content>
          </Button>
          </Link>
        </Container>
        <br></br>
        <h1>Reviews!</h1>
        <ReviewContainer reviews={caligraphy.reviews} />
      </div>
    )
  }
  }

  export default CaligraphyDetail
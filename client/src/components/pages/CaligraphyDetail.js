import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Container, Header } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

const CaligraphyDetail = ({admin, handleDeleteCaligraphy}) => {
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

  else if(!admin){
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
    </div>
  )
  }
  }

  export default CaligraphyDetail
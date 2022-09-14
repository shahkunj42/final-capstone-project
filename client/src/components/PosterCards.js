import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const PosterCards = ({poster}) => {

    const {title, image_url, price, description, id} = poster

    const extra = <p>$ {price}</p>

    return(
        <Link to={`/posters/${id}`}>
        <Grid.Column>
            <Card 
                image={image_url}
                header={title}
                meta='Poster'
                description={description}
                extra={extra}
            />
        </Grid.Column>
        </Link>
)
}

export default PosterCards
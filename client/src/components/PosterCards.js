import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



const PosterCards = ({poster}) => {

    const {title, image_url, price, description, id} = poster

    const extra = <p>$ {price}</p>

    return(
        <Link to={`/posters/${id}`}>
        <ul className='container_items'>
            <Card 
                image={image_url}
                header={title}
                meta='Poster'
                description={description}
                extra={extra}
            />
        </ul>
        </Link>
)
}

export default PosterCards
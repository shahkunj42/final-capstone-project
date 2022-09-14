import React from 'react'
import { Card, Grid } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const CaligraphyCards = ({caligraphy}) => {

    const {title, image_url, price, description, id} = caligraphy

    const extra = <p>$ {price}</p>

    return(
        <Link to={`/caligraphies/${id}`}>
        <Grid.Column>
            <Card
                image={image_url}
                header={title}
                meta='Caligraphy'
                description={description}
                extra={extra}
            />
        </Grid.Column>
        </Link>
)
}

export default CaligraphyCards
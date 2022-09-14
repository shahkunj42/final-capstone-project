import React from 'react'
import PosterCards from '../PosterCards'
import { Grid } from 'semantic-ui-react'

function Posters({posters}) {

   let posterList = posters.map(poster => <PosterCards key={poster.id} poster = {poster} />)

  return (
    <div>
        <h1>Wedding Posters</h1>
        <br></br>
        <Grid relaxed columns={4} padded>
          {posterList}
        </Grid>
    </div>
  )
}

export default Posters
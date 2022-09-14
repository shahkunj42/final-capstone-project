import React from 'react'
import CaligraphyCards from '../CaligraphyCards'
import { Grid } from 'semantic-ui-react'

function Caligraphies({caligraphies}) {

   let caligraphyList = caligraphies.map(caligraphy => <CaligraphyCards key={caligraphy.id} caligraphy = {caligraphy} />)

  return (
    <div>
    <h1>Custom Calligraphy and Cards</h1>
    <br></br>
      <Grid relaxed columns={4} padded>
          {caligraphyList}
      </Grid>
    </div>
  )
}

export default Caligraphies
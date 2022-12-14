import React, {useState, useEffect } from 'react'
import InquriesContainer from '../InquriesContainer'
import { Grid, Segment } from 'semantic-ui-react'

function Inquiries() {
  const [inquiries, setInquiries] = useState([])
  useEffect(() => fetch('/inquries').then(r => r.json()).then(data => setInquiries(data)), [])

  let inquryList = inquiries.map(inqury => <InquriesContainer key={inqury.id} inqury={inqury}/>)

  return (
    <div>

      <Grid padded>
      {inquryList.reverse()}
      </Grid>
    </div>
  )
}

export default Inquiries
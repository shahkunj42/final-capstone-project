import React from 'react'
import CaligraphyCards from '../CaligraphyCards'
import '../Container.css'

function Caligraphies({caligraphies}) {

   let caligraphyList = caligraphies.map(caligraphy => <CaligraphyCards key={caligraphy.id} caligraphy = {caligraphy} />)

  return (
    <div className='container'>
    <h1>Custom Caligraphy and Cards</h1>
    <div className='container_body'>
      <div className='container_wrapper'>
          {caligraphyList}
      </div>
    </div>
    </div>
  )
}

export default Caligraphies
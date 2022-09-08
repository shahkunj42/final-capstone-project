import React from 'react'
import PosterCards from '../PosterCards'
import '../Container.css'

function Posters({posters}) {

   let posterList = posters.map(poster => <PosterCards key={poster.id} poster = {poster} />)

  return (
    <div className='container'>
        <h1>Wedding Posters</h1>
        <div className='container_body'>
        <div className='container_wrapper'>
            {posterList}
        </div>
        </div>
    </div>
  )
}

export default Posters
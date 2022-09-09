import React from 'react'
import Reviews from './Reviews'

function ReviewContainer({reviews}) {
    const reviewList = reviews.map(rv => <Reviews key={rv.id} review={rv}/>)
  return (
    <div>{reviewList}</div>
  )
}

export default ReviewContainer
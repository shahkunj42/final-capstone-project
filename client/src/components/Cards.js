import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Creations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='pics/custom-cards.jpeg'
              text='Custom Cards and Caligraphy'
              label='Caligraphy'
              path='/caligraphy'
            />
            <CardItem
              src='./arjun-kalgi-wedding-live.jpeg'
              text='Wedding Posters'
              label='Posters'
              path='/posters'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
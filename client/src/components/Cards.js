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
              src='https://i.imgur.com/zpeacNa.jpg'
              text='Custom Cards and Calligraphy'
              label='Calligraphy'
              path='/shai-caligraphies'
            />
            <CardItem
              src='https://i.imgur.com/7QGMcL4.jpg'
              text='Wedding Posters'
              label='Posters'
              path='/shai-posters'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
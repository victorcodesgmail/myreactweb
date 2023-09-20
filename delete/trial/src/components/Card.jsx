import React from 'react'
import farmer from '../assets/farmer.png'
import './card.css'
import Airbnb from './Airbnb'

const Card = (prop) => {
  return (
    <div className='carde'>
      <div className='cardbadge'>SOLD OUT</div>
        <img src={farmer} className='cardimage' alt="farmer"/>
        <div className="cardstats">
            <span className='gray'>{prop.rating}</span>
            <span className='gray'>{prop.number}</span>
            <span className='gray'>{prop.states}</span>
        </div>
        <p>Life lessons by Victory</p>
        <p > <span className='bold'>From 136$</span>/person</p>
    </div>
  )
}

export default Card
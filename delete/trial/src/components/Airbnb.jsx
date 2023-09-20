import React from 'react'
import './airbnb.css'
import farmer from '../assets/farmer.png'
import Card from './Card'


const Airbnb = () => {
  return (
   <div className='air'>
    <div>
        <h1 className='airHeader'>airbnb</h1>
    </div>
    <img className='airimage' src={farmer} alt='farmer'/>
    <h1 className='aironline'>Online Experinces</h1>
    <p className='airabout'>join unique, interactive websites and forums all while at your home</p>
    <div className='cardi'>
     
    </div>
    <Card
    rating={5}
    states='Kenya'
    number='(6.0'
    />  
   </div>
   
  )
}

export default Airbnb
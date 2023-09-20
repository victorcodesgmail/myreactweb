import React from 'react'
import mrwhiskerson from '../assets/mrwhiskerson.jpg'
import './contacts.css'

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contactsbadge'>SOLD OUT</div>
   <img src={mrwhiskerson} alt='cat'className='contactsimage'/>
   <h3>Mr Whikerson</h3>
 <div className="infogroup">
    
    <p>(0111874202)</p>
 </div>
 <div className="infogroup">
 
 <p>mr whiskaz@catnap.meow</p>
 </div>


    </div>
  )
}

export default Contacts
import React from 'react'
import farmer from '../assets/farmer.png'
import './Bscard.css';

const Bscard = () => {
  return (
    <div>
        <div className='card'>
            <img src={farmer}  alt="person"/>
            <h1>Victory Kimathi</h1>
            <h4>front endDeveloper</h4>
            <button>
                Email
            </button>
            <h3>About</h3>
            <p>Am very creative,determined,hardworking and likes to read a lot of books. I like to follow the footsteps of my mentors .</p>
            <h3>Interests</h3>
            <p>i do coding.Am an artist.Am a social Engineer, Ethical Hacker, webDeveloper and a farmer.</p>
        </div>
    </div>
  )
}

export default Bscard
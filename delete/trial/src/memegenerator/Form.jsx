import React from 'react'
import './form.css'
import memesData from './memesData'
// import dog from '../src/assets/dog.png'




const Form = () => {


  const [meme, setMeme] =React.useState(
    {
      topText:"yo",
      bottomText:"",
      randomImage:''
    }
  )
const[allMemeImages, setAllMemmeImages]=React.useState(memesData)

  function getMemeImage(){
  
   const memesArray = memesData.data.memes
const randomnNumber = Math.floor(Math.random() * memesArray.length)

                         const url=memesArray[randomnNumber].url
                         setMeme(prevMeme=>({
                           ...prevMeme,
                           randomImage:url
                         }))
  }

const[formData, setFormData]=React.useState({
  "firstName":"",
  "lastName":""
})

     console.log(formData)

                            function handleChange(){
                              setFormData(prevFormData=>
                                { return { 
                                  ...prevFormData,
                                 [event.target.name]:event.target.value
                                }
                            }
                              )
                            }

  return (
    <div className='form'>
      
     
        <div className="formform">
        <input 
        className='forminput'
        type="text"
   onChange={handleChange}
        placeholder='TOP TEXT'
        name='firstName'
        />
        <input 
        className='forminput'
        type="text"
         onChange={handleChange}
        placeholder='BOTTOM TEXT'
        name='lastName'
        />
        <button
        onClick={getMemeImage}
        className='formbutton'
        >
           GET NEW MEME IMAGE
        </button>
        </div>
        <img className='formimage' src='' alt='well'/>
        {meme.topText}
    </div>
  )
  }


export default Form
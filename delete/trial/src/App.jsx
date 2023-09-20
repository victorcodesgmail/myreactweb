// import React from 'react'
// import './App.css'
// import Data from './Data'
// import Joke from './Joke'
// import Navbar from './Navbar'






// function App() {
//   const card=Data.map(item=>
//      {
//       return(
//         <>
//         <Joke setup={item.setup}
//         punchline={item.punchline}
//         key={item.id}/>
//         </>
        
//       )
//      }
//     )

//   return (
//     <>
//    {card}
//    <Navbar/>
        
//     </>
//   )
// }

// export default App


import React from 'react';
import ReactDOM from 'react-dom'
import  './App.css';
import {Billing,Drop,Api,Box,State,Contacts,Bscard,Navbar,Business,CTA,Client,Button,Feedback,GetStarted, Hero, Footer,Airbnb,Learn} from './components';
import {Meme} from './memegenerator'
import Data from './Data';
import Joke from './Joke';

// import {Routes, Route,UseNavigate} from 'react-router-dom'
import Header from './memegenerator/Header';

const App= () => {
  const display=Data.map(item=>{
return (
  
  <>
  <Joke
  item={item}
  id={item.key}
  />
  {/* or
<Joke
image={item.image}
setup={item.setup}
punchline={item.punchline}
id={item.id}
location={item.locaitem}
/> */}


  </>
)
  })

  return(
//     <Routes>
// <Route path="airbnb" element={<Airbnb/>} />
// <Route path="contacts" element={<Contacts/>} />

    <>
    <div className="main">
      <div>
        <div>
          <Learn/>
          <Bscard/>
          <Airbnb/>
          <Contacts/>
          <Contacts/>
          <Contacts/>
         
          <Navbar/>
         

          </div>
        </div>
      <div>
        <div className='joking'>
        {display}
          <Hero/>
        </div>
      </div>

      <div>
        <div>
        <Meme/>
        <State />
        <Box
        />

        <Billing/>
    <Navbar/>
    <Business/>
    <Api/>
    <Drop />
    <CTA/>
    <Client/>
    <Button/>
    <Feedback/>
    <GetStarted/>
    <Hero/>
    <Footer/>

        </div>
      </div>
      
    </div>
    </>
    // </Routes>
  )
}


export default App
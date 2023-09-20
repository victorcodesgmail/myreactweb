import React from 'react'
import boxData from './boxData'
import './box.css'
import Boxer from './Boxer'

const Box = () => {
    const[box, setBox]=React.useState(boxData)
function toggle(id){
  setBox(prevBox=>{ return prevBox.map((box)=>box.id===id?{...box,on:!box.on}:box)})
}
// const newBoxes=[]

// for(let i=0;i<prevBox.length;i++)

// {
//   const currentBox=prevBox[i]
//   if(currentBox.id===id){
//     const updatedBox={
//       ...currentBox,
//       on:!currentBox.on
//     }
//     newBoxes.push(updatedBox)
//   }else{
//     newBoxes.push(currentBox)
//   }

// }
// return newBoxes
     

    
    

    const boxing=box.map(box=>(
       <Boxer 
       toggle={()=>toggle(box.id)} 
       on={box.on}
        // id={box.id}
        key={box.id}/>
    ))
  return (
    <div className='box'>

       {boxing}
    </div>
  )
}

export default Box
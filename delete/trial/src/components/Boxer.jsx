import React from 'react'

const Boxer = (props) => {

 
  
  // function toggle(){
  //   setOn(prevState=>!prevState)
  // }

  const styles={
    backgroundColor:props.on?"#222222": "transparent",
    width:props.on?'100px':'20px',
    height:props.on?'100px':'20px'
    
}

  return (
  
         <div style={styles} 
         onClick={()=>props.toggle(props.id)} 
      //  or//  onClick={props.toggle}
         className='square' >
          
         </div>
    
  )
}

export default Boxer
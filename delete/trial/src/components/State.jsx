import React from 'react'

const State = () => {
  const [result, setResult] =React.useState(true)



function handleClick()
{
  setResult(prevstate=>!prevstate);
}
  return (
    <div className='state'>
        <h1 className='statetitle'>Do I love Chelsea</h1>
        <div className='statevalue'>
            <h1  onClick={handleClick}>{result? 'YES': 'NO'}</h1>
            <button  onClick={handleClick}>
click ME
            </button>
        </div>
    </div>
  )
}

export default State
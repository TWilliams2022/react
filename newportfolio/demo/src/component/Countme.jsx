import { Button } from '@mui/material';
import React, { useState } from 'react'

const Countme = () => {

const [count , setCount ] = useState(1);

function increase() {
    setCount(count + 3)
}

  return (
    <div className='container'>
    <h1>{count}</h1>
        <button id='button' onClick={increase} >
                    +ADD+
        </button>
    </div>
  )
}

export default Countme
import React, { useState } from 'react'

export default function Test() {

    const [count , setCount] = useState(0) //variable value initilaized to the 0

  return (

    
    <div className='w-full h-screen bg-green-400'>
        <h1>{count}</h1>

        <button onClick={()=>{

            const newCount = count + 1;
            setCount(newCount)

        }}>count</button>
    </div>
  )
}

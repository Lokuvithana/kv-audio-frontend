import React, { useState } from 'react'
import mediaUpload from '../utils/mediaUpload.js';

export default function Test() {

  const [file,setFile] = useState(null);

  function uploadFile(){
    console.log(file);

    mediaUpload(file).then((url)=>{
      console.log(url)
    })
  }

  return (
    
    <div className='w-full h-screen bg-green-400'>
        
        <input type="file"  onChange={(e)=>{setFile(e.target.files[0])}/*if we need to upload mulitiple files we can use multiple key word with onchange */}/>
        <button onClick={uploadFile} className='w-[200px] h-[50px] bg-blue-300 text-white '>Submit</button>
    </div>
  )
}
 
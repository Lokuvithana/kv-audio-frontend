import React from 'react'
import Header from '../../components/header.jsx'
import { Routes,Route} from 'react-router-dom'
import Contact from './contact.jsx'
import Gallery from './gallery.jsx'
import Items from './items.jsx'
import Error from './error.jsx'

export default function HomePage() {
  return (
    <>

        <Header/>

        <div className='w-full h-[calc(100vh-100px)] '>
            
            <Routes path ="/*">
            
                <Route path = "/contact" element={<Contact/>}/>
                <Route path = "/gallery" element={<Gallery/>}/>
                <Route path = "/items" element={<Items/>}/>
                <Route path = "/*" element={<Error/>}/>
        
            </Routes>
        </div>

    </>
  
  )
}

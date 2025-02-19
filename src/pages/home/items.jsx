import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import ProductCard from '../../components/productCard';

export default function Items() {

  const backendurl = import.meta.env.VITE_BACKEND_URL;
  const [state,setState] = useState("loading");//loding,sucess.error
  const [items,setItems] = useState([]);

  useEffect(()=>{

    if (state == "loading"){

      axios.get(backendurl + "/api/products").then((res)=>{

        setItems(res.data)
        setState("success")
  
      }).catch((err)=>{

        toast.error(err?.response?.data?.error || "An error occured")
        setState("error")
      })
    }

  },[])

  return (

    <div className='w-full h-screen flex flex-wrap justify-center pt-[50px]'>

      {
        state == "loading"&& 
        
        <div className='w-full h-full  flex justify-center items-center'>
          
          <div className='w-[50px] h-[50px] rounded-full border-4 border-t-green-500 animate-spin'/>

        </div>
      }

      {
        state == "success"&&
        items.map((item)=>{
          return(
            
            <ProductCard key={item.key} item = {item}/>
          )
        }) 
      }
  
    </div>
  )
}

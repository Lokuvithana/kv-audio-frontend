import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

export default function UpdateItems() {

  // useLocatuion hook use for grab values from navigation
  const location = useLocation();

  const [productKey, setProductKey] = useState(location.state.key);
  const [productName, setProductName] = useState(location.state.name);
  const [productPrice, setProductPrice] = useState(location.state.price);
  const [productCategory, setProductCategory] = useState(location.state.category);
  const [productDimension, setProductDimension] = useState(location.state.dimensions);
  const [productDescription, setProductDescription] = useState(location.state.description);


  const navigate= useNavigate();

  async function handleUpadateItems(){

    const token = localStorage.getItem("token")

    if(token){
      
      try {

        const result = await axios.put("http://localhost:3000/api/products/" + productKey,
          {
            name : productName,
            price : productPrice,
            category : productCategory,
            dimensions : productDimension,
            description : productDescription
    
          },{
            headers : {
    
              Authorization : "Bearer " + token
    
            }
          })
          toast.success("Item Upadated successfully")
          navigate("/admin/items")
        
      } catch (error) {

        toast.error(error.response.data.error)
      }
      
      

    }else{
      toast.error("Please login and retry")
    }

  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800 uppercase tracking-wide relative mb-6">Upadte Items</h1>

      <div className='w-[400px]  flex flex-col justify-center items-center p-4 rounded-lg'>
        <input
          disabled //this prevent update product key 
          onChange={(event) => setProductKey(event.target.value)}
          value={productKey}
          type="text"
          placeholder='Product Key'
          className='p-2 m-2 w-full border rounded'
        />

        <input
          onChange={(event) => setProductName(event.target.value)}
          value={productName}
          type="text"
          placeholder='Product Name'
          className='p-2 m-2 w-full border rounded'
        />

        <input
          onChange={(event) => setProductPrice(event.target.value)}
          value={productPrice}
          type="number"
          placeholder='Product Price'
          className='p-2 m-2 w-full border rounded'
        />

        <select
          value={productCategory}
          onChange={(event) => setProductCategory(event.target.value)}
          className='p-2 m-2 w-full border rounded'
        >
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
        </select>

        <input
          onChange={(event) => setProductDimension(event.target.value)}
          value={productDimension}
          type="text"
          placeholder='Product Dimensions'
          className='p-2 m-2 w-full border rounded'
        />

        <textarea
          onChange={(event) => setProductDescription(event.target.value)}
          value={productDescription}
          type="text"
          placeholder='Product Description'
          className='p-2 m-2 w-full border rounded'
        />

        <button onClick = {handleUpadateItems} className='p-2 m-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600'>
          Upadate
        </button>

        <button onClick={()=>{navigate("/admin/items")}} className='p-2 m-2 w-full bg-red-500 text-white rounded hover:bg-red-600'>
          Cancel
        </button>
      </div>
    </div>
  );
}

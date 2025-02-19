import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function AddItems() {
  const [productKey, setProductKey] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCategory, setProductCategory] = useState("audio");
  const [productDimension, setProductDimension] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const navigate= useNavigate();

  async function handleAddItems(){

    const token = localStorage.getItem("token")
    const backendurl = import.meta.env.VITE_BACKEND_URL;

    if(token){
      
      try {

        const result = await axios.post(backendurl +"/api/products",
          {
            key : productKey,
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
          toast.success("Item added successfully")
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
      <h1>Adding Items</h1>

      <div className='w-[400px]  flex flex-col justify-center items-center p-4 rounded-lg'>
        <input
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

        <button onClick = {handleAddItems} className='p-2 m-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600'>
          Add
        </button>

        <button onClick={()=>{navigate("/admin/items")}} className='p-2 m-2 w-full bg-red-500 text-white rounded hover:bg-red-600'>
          Cancel
        </button>
      </div>
    </div>
  );
}

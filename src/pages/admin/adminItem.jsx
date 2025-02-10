import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GoPlusCircle } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';

export default function AdminItem() {

  const [items, setItems] = useState([]);
  const [itemLoad, setItemLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    if(!itemLoad){

      const token = localStorage.getItem("token");

      axios.get("http://localhost:3000/api/products", { headers: { Authorization: "Bearer " + token } })

        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          setItemLoad(true);
        })
        .catch((er) => {
          console.log(er);
        });
    }  

  },[itemLoad]);

  const handleDelete = (key) => {

    setItems(items.filter(item => item.key !== key));

    const token = localStorage.getItem("token");

    axios.delete(`http://localhost:3000/api/products/${key}`,{
      headers : { Authorization : "Bearer " + token}
    }).then((res)=>{

      console.log(res.data)
      setItemLoad(!itemLoad);//refersh the page after deletion bcs itemload vaule has been modified then again goin ti refresh page 

    }).catch((er)=>{

      console.log(er);
    })
  };

  return (
    <div className='w-full h-full p-6 flex flex-col items-center'>

      {!itemLoad && <div className='w-[80px] h-[80px]  rounded-full border-4 my-4 border-b-blue-700 animate-spin'></div>}

      {itemLoad && <table className="w-full border-collapse border border-gray-300 shadow-lg">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="p-3 border">Key</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Dimensions</th>
            <th className="p-3 border">Availability</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => (
            <tr key={product.key} className="hover:bg-gray-100 text-center">
              <td className="p-3 border">{product.key}</td>
              <td className="p-3 border">{product.name}</td>
              <td className="p-3 border">${product.price}</td>
              <td className="p-3 border">{product.category}</td>
              <td className="p-3 border">{product.dimensions}</td>
              <td className="p-3 border">
                <span className={`px-2 py-1 rounded text-white ${product.availability ? 'bg-green-500' : 'bg-red-500'}`}>
                  {product.availability ? 'Available' : 'Unavailable'}
                </span>
              </td>
              <td className="p-3 border space-x-2">

              <button
                  onClick={() =>{

                    //sate is passed the values of product while navigating to update page
                    navigate("/admin/items/update" ,{state:product})
                  }}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >Update</button>
                  
                <button
                  onClick={() => handleDelete(product.key)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >Delete</button>
                   
              </td>
            </tr>
          ))}
        </tbody>
      </table>}

      <Link to="/admin/items/add" className="fixed bottom-4 right-4">
        <GoPlusCircle className="text-[80px] text-green-500 hover:text-green-600 transition-all duration-200" />
      </Link>

    </div>
  );
}

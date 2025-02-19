import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password, firstName, lastName, address, phone);
    // You can implement further actions here like form validation, or API calls

    const backendurl = import.meta.env.VITE_BACKEND_URL;

    axios.post(backendurl + "/api/users",{

      email : email,
      password : password,
      firstName : firstName,
      lastName : lastName,
      address : address,
      phone : phone

    }).then((res)=>{

      toast.success("Registartion Successfully");
      navigate("/login")

    }).catch((err)=>{

      //if err exist then get the response value nect response value is availble here then can get the data value
      console.log(err?.response?.data?.error || "An error occured");
    })
  }

  return (
    <div className='bg-picture h-screen flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-[400px] h-[700px] backdrop-blur-lg rounded-2xl flex justify-center items-center flex-col relative'>
        <img
          src='./logo.png'
          alt='logo'
          className='w-24 h-24 flex justify-center items-center bg-yellow-600 mb-6'
        />
        <input
          type='email'
          placeholder='Email'
          className='w-[300px] p-3 bg-transparent text-white text-lg outline-none border-b-2 border-gray-300 focus:border-yellow-500 mb-4 transition-all duration-300'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          type='password'
          placeholder='Password'
          className='w-[300px] p-3 bg-transparent text-white text-lg outline-none border-b-2 border-gray-300 focus:border-yellow-500 mb-4 transition-all duration-300'
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <input
          type='text'
          placeholder='First Name'
          className='w-[300px] p-3 bg-transparent text-white text-lg outline-none border-b-2 border-gray-300 focus:border-yellow-500 mb-4 transition-all duration-300'
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
        <input
          type='text'
          placeholder='Last Name'
          className='w-[300px] p-3 bg-transparent text-white text-lg outline-none border-b-2 border-gray-300 focus:border-yellow-500 mb-4 transition-all duration-300'
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        <input
          type='text'
          placeholder='Address'
          className='w-[300px] p-3 bg-transparent text-white text-lg outline-none border-b-2 border-gray-300 focus:border-yellow-500 mb-4 transition-all duration-300'
          onChange={(event) => setAddress(event.target.value)}
          value={address}
        />
        <input
          type='text'
          placeholder='Phone'
          className='w-[300px] p-3 bg-transparent text-white text-lg outline-none border-b-2 border-gray-300 focus:border-yellow-500 mb-4 transition-all duration-300'
          onChange={(event) => setPhone(event.target.value)}
          value={phone}
        />
        <button className='w-[300px] p-3 bg-yellow-600 text-white text-lg rounded-lg hover:bg-yellow-700 transition-all duration-300'>
          Register
        </button>
      </form>
    </div>
  );
}

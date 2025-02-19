import React, { useState } from 'react'
import "./login.css"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    
    const [email,setemail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate()

    //preventsubmit alwas prevent auto refreshing the page after the from  submission
    function handleSubmit(event){
        event.preventDefault()
        console.log(email , password)

        const backendurl = import.meta.env.VITE_BACKEND_URL;

        //this is use to make request to the backend
        axios.post(backendurl + "/api/users/login" ,{
            email : email,
            password : password
        }).then((res)=>{

            console.log(res);
            toast.success("Login Sucess");
            const user = res.data.user;

            //setItem is a keywword to set the value
            localStorage.setItem("token" , res.data.token)
            
            if(user.role == "admin"){

                navigate("/admin/")
            }else{

                navigate("/")
            }

        }).catch((error)=>{
            console.log(error);
            toast.error(error.response.data.error)
        })
    }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-picture'>

        <form onSubmit={handleSubmit}>

            <div className='w-[400px] h-[400px] backdrop-blur-lg rounded-2xl flex justify-center items-center flex-col relative'>

                <img src="./logo.png" alt="logo" className="w-24 h-24 flex justify-center items-center  bg-yellow-600 mb-6"/>

                <input type="email" placeholder='Email' className="w-[300px] p-3 bg-transparent text-white text-lg outline-none border-b-2 border-gray-300 focus:border-yellow-500 mb-4 transition-all duration-300" onChange={(event)=>{
                    setemail(event.target.value);
                }}
                value={email}/>

                <input type="password" placeholder='Password' className="w-[300px] p-3 bg-transparent text-white text-lg outline-none border-b-2 border-gray-300 focus:border-yellow-500 mb-4 transition-all duration-300" onChange={(event)=>{
                    setPassword(event.target.value);
                }}
                //meken kiyanne hadisiyewath loku refersh ekak wela user enter karapu password eka makunoth awl nisa u enter karana password eka metha filed eke value eka widhata deela thiyenawa 
                value={password} />

                <button className="w-[300px] p-3 bg-yellow-600 text-white text-lg rounded-lg hover:bg-yellow-700 transition-all duration-300" >
                Login</button>

            </div>

        </form>

        
      
    </div>
  )
}

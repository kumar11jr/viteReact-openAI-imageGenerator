import React from 'react'
import "./Login.css";
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const Login = () => {
   const[username,setusername] = useState("");
   const[password,setpassword] = useState("");
   const navigate = useNavigate();

   

   async function login(event)
    {
        event.preventDefault();
        
    try
        {
         await axios.post("http://localhost:8085/api/v1/employee/login",
        {
        
        username: username,
        password: password,
        
        }).then((res)=>{
         console.log(res.data);
         if (res.data.message === "Email not exits") {
            Swal.fire({
               icon: 'warning',
               title: '',
               text: 'Username and Password not matched',
             })
         }
         else if (res.data.message === "Login Success") {
            Swal.fire({
               icon: 'success',
               title: '',
               text: 'Login Completed',
              
             })
            navigate('/home',"_blank");
         }
         else
         {
            Swal.fire({
               icon: 'error',
               title: '',
               text: 'Incorrect Email and Password not match',
               footer: '<a href="">Forgot Password?</a>'
             })
           
         }
        },fail => {
         console.error(fail); 
});
 }
        catch (err) {
         alert(err);
         navigate("/login");
       }
   }
  return (
    <div class="login-form">
    <div class="text">
       LOGIN
    </div>
    <form>
       <div class="field">
          
          <input required type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="Email or Phone"/>
       </div>
       <div class="field">
          
          <input required value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Password"/>
       </div>
       <button onClick={login}>LOGIN</button>
       
       <div class="link">
          Not a member?
          <a href="/signup">Signup now</a>
       </div>
    </form>
 </div>
  )
}

export default Login

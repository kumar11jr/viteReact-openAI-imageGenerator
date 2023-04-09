import React, { useState } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import "./SignUp.css"
import { Navigate, useNavigate } from 'react-router';


const SignUp = () => {
    const[username,setusername] = useState("");
    const[password,setpassword] = useState("");
    const navi = useNavigate();

    async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8085/api/v1/employee/save",
        {
        
        username: username,
        password: password,
        
        });
          Swal.fire({
            icon: 'success',
            title: '',
            text: 'Employee Registation Successfully',
           
          })
          setusername("");
          setpassword("");

          navi("/home");
        }
    catch(err)
        {
          
          Swal.fire({
            icon: 'info',
            text: 'User Registation Failed',
          })
          Navigate("/signup")
        }
   }
  return (
    <div>
      <div class="wrapper">
      <div class="title">Registration Form</div>
      <form action="#">
        <div class="field">
          <input  value={username} onChange={(e)=>{
            setusername(e.target.value)
          }} type="text" required/>
          <label>Email Address</label>
        </div>
        <div class="field">
          <input value={password} onChange={(e)=>{
            setpassword(e.target.value)
          }} type="password" required/>
          <label>Password</label>
        </div>
        <div class="content">
          <div class="checkbox">
            <input type="checkbox" id="remember-me"/>
            <label for="remember-me">Remember me</label>
          </div>
        </div>
        <div class="field">
          <input type="submit" onClick={save} value="Register"/>
        </div>
        <div class="signup-link">Have a account? <a href="/">Login now</a></div>
      </form>
    </div>
    </div>
  )
}

export default SignUp

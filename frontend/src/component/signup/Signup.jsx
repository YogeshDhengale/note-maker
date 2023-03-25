import React, { useState } from 'react'
import './signup.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Signup = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({email:"", password:""})
  const [confirmPassword, setConfirmPassword] = useState("")
  const [rem, setRem] = useState("off")
  
  const handleSubmit=(e)=>{
      e.preventDefault()
      if(confirmPassword!==form.password){
          return alert("password and confirm password must be matched")
      }
      else{
         Axios.post("http://localhost:3001/signup", { //https://note-backend-vvfj.onrender.com
         email:form.email,
         password:form.password
      }).then((res=>{


      })).catch((e)=>{
          console.log(e);
      })
  }
}
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <div className='form-inputs'>
          <label htmlFor="email">Email adress</label>
          <input type="email" placeholder='Enter Email' id='email' onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        </div>
        <div className='form-inputs'>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='Enter Password' id='password' onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        </div>
        <div className='form-inputs'>
          <label htmlFor="confirm-password">Confirm password</label>
          <input type="password" placeholder='Enter Password' id='confirm-password' onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <div className='check-box-container'>
          <input type="checkbox" id='check' onChange={(e) => setRem((old) => { return (old === "off") ? "on" : "off" })} required />
          <label htmlFor="ckeck">Remember</label>
        </div>
        <div className='form-inputs'>
          <button >Submit</button>
        </div>
        <div className='forgot'>
          <Link to={"/"}>Sign IN</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup
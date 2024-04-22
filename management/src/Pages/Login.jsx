import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
function Login()  {
  const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
  
    const handleSubmit=(e)=>{
      e.preventDefault()
      axios.post('http://localhost:3002/login',{email,password})
      .then(result => {
        console.log(result)
        if(result.data === "Success"){
           navigate('/home')}
      })
      .catch(err=>console.log(err))
    }
  return (
    <div className='sign-up-container'>
    <h2>SIGN IN</h2>
    <form onSubmit={handleSubmit}>
      <div className='form'>
        <label className='lab' htmlFor="email">Email:</label>
        <br></br>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required
        />
      </div>
      <div className='form'>
        <label className='lab' htmlFor="password">Password:</label>
        <br></br>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required
        />
      </div>
      <button className='reg' type='submit'>Login</button>
    </form>
    <h4>Register First</h4>
    <button className='log'>
     <Link to="/register" className='lin' >Register
        </Link>
        </button>
     
  </div>
  )
}
export default Login;
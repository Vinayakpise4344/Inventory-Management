import React from 'react'
import{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import './sign.css'
const Singup = () => {
  //we use usestate for  variable 
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3002/register',{name,email,password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className='sign-up-container'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <label className='lab' htmlFor="username">Username:</label>
          <br></br>
          <input
            type="text"
            id="username"
            name="username"
            
            onChange={(e)=>{
              setName(e.target.value)
            }}
            required
          />
        </div>
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
        <button className='reg' type="submit">Register
        </button>
        </form>
        <h4>Already have an Account</h4>
        <button className='log'>
        <Link to="/login" className='lin' >Login
        </Link>
        </button>
     
    </div>
  )
}

export default Singup
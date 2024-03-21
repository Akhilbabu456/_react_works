import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const host = "http://localhost:5000"

    const [credentials, setCredentials] = useState({email: "", password: ""})
    const history = useNavigate();
    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
        }
    const handleSubmit = async(e)=>{
      e.preventDefault()
      const response = await fetch(`${host}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",	
        },
        body: JSON.stringify({email: credentials.email,password: credentials.password})
      })
      const json = await response.json()
      console.log(json)
      if(json){
        localStorage.setItem('token', `Bearer ${json.token}`)
        props.showAlert("Successfully Logged in", "success")
        history("/")
      }else{
        props.showAlert("Invalid credentials", "danger")
      }
    }
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onChange} value={credentials.email} name="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name="password"/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
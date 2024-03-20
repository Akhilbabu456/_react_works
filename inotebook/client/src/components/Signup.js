import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const host = "http://localhost:5000"

    const [credentials, setCredentials] = useState({name: "",email: "", password: "", cpassword: ""})
    const history = useNavigate();
    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
        }
    const handleSubmit = async(e)=>{
      e.preventDefault()
      const response = await fetch(`${host}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",	
        },
        body: JSON.stringify({name: credentials.name,email: credentials.email,password: credentials.password})
      })
      const json = await response.json()
      console.log(json)
      if(json.success){
        localStorage.setItem('token', "Bearer"+ json.token)
        history("/")
        props.showAlert("Successfully Created account", "success")
      }else{
        props.showAlert("Invalid credentials", "danger")
      }
     
    }
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" onChange={onChange} value={credentials.name} name="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" onChange={onChange} value={credentials.email} name="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange} value={credentials.password} id="password" name="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" onChange={onChange} value={credentials.cpassword} id="cpassword" name="cpassword"/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Signup
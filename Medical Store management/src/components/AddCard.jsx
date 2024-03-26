import { Link, useNavigate } from "react-router-dom"
import Header from "./Header"
import { useState } from "react"



const AddCard = () => {
  const navigate = useNavigate()
 const [medicine, setMedicine] = useState({
   name: "",
   company: "",
   expiry_date: ""
 })

 const handleAddMed = async(e) => {
   e.preventDefault()
   const url = "https://medicalstore.mashupstack.com/api/medicine"
   const res = await fetch(url,{
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Authorization": `Bearer ${localStorage.getItem("token")}`
     },
     body: JSON.stringify(medicine),
   })
   let data = await res.json()
   console.log(data)
   navigate("/users")
 }

  return (
    <div>
      <Header/>
      <div className="container1 ">
       
        <div className="forms-container">
          
          <div className="signin-signup">
            
            <form action="#" className="sign-in-form" onSubmit={handleAddMed}>
              <h2 className="title">Add Medicine</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Medicine name" value={medicine.name} 
                onChange={(e)=>{setMedicine({...medicine,name: e.target.value})}}/>
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Company" value={medicine.company} 
                onChange={(e)=>{setMedicine({...medicine,company: e.target.value})}}/>
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="date" placeholder="Date"  value={medicine.expiry_date} 
                onChange={(e)=>{setMedicine({...medicine,expiry_date: e.target.value})}}/>
              </div>

              <input type="submit" value="Add Medicine" className="btn1 solid" />

            </form>

          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Want to go Back</h3>
            <Link to="/users" className="btn btn-dark justify-content-end"> Back</Link>
            </div>
            <img src="/log.svg" className="image" alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}



export default AddCard
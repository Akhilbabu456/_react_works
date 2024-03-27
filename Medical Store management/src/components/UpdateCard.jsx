import { Link, useNavigate, useParams } from "react-router-dom"
import Header from "./Header"
import {  useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import Loader from "./Loader";
// import { UserContext } from "../context/userContext";


const UpdateCard = () => {
  const [update, setUpdate] = useState({
    name: "",
    company:"",
    expiry_date:""
  })
  const [loading, setLoading] = useState(false)

  const { id } = useParams();
  // const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const toast = useToast()

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
      toast({
        title: "Unauthorized",
        status: "error",
        duration: 2500,
        isClosable: true,
        position: "top",
      })
    } else {
      const getMedicineData = async () => {
        setLoading(true)
        try {
        
          const response = await fetch(
            `https://medicalstore.mashupstack.com/api/medicine/${id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
              },
            }
          );
         setLoading(false)
          let data = await response.json()
          console.log(data)
          setUpdate(data)
        } catch (err) {
          
          console.log(err);
        }
      };

      getMedicineData();
    }
  }, [id, token, navigate]);


  const handleUpdate = async(e)=>{
    e.preventDefault()
    
      let url = `https://medicalstore.mashupstack.com/api/medicine/${id}`
      let res = await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(update)
      })
       await res.json()
       if(res.status===200){
           toast({
             title: "Medicine Updated",
             status: "success",
             duration: 2500,
             isClosable: true,
           })
           navigate("/users")
       }else{
           toast({
             title: "Medicine Not Updated",
             status: "error",
             duration: 2500,
             isClosable: true,
           })
       }
  }



  return (
    <div>
      <Header/>
     
      <div className="container1">
        <div className="forms-container">
          <div className="signin-signup">
            {loading && <Loader/>}
            <form action="#" className="sign-in-form" >
              <h2 className="title">Update Medicine</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Medicine name" value={update.name} 
                onChange={(e) => setUpdate({ ...update, name: e.target.value })}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Company" value={update.company} 
                onChange={(e) => setUpdate({ ...update, company: e.target.value })} />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="date" placeholder="Date" value={update.expiry_date} 
                onChange={(e) => setUpdate({ ...update, expiry_date: e.target.value })} />
              </div>

             <button className="btn1" onClick={handleUpdate}>Update</button>

            </form>
          </div>
        </div>


        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
            <h3>Want to go Back</h3>
            <Link to="/users" className="btn btn-dark justify-content-end"> Back</Link>
            </div>
            <img src="/update.png" className="image" alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}



export default UpdateCard


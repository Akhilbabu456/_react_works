import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import Loader from "./Loader";


const TableCard = () => {
  let user = localStorage.getItem("token");
  const [medicineList, setMedicineList] = useState([]);
  const [search , setSearch] = useState("")
  const [id, setId]= useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  let toast = useToast()

  const fetchMedicine = async()=>{
     try{
      setLoading(true)
      let url = "https://medicalstore.mashupstack.com/api/medicine"
       let res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
       })
       let data = await res.json()
       setLoading(false)
       setMedicineList(data)
     }catch(err){
         console.log(err)
     }
  }

  useEffect(()=>{
    if(!user){
      navigate("/")
      toast({
        title: "Unauthorized",
        status: "error",
        duration: 2500,
        isClosable: true,
      })
    }
    fetchMedicine()
  },[])

  const handleSearch = async() => {
    setLoading(true)
     try{
        let url = `https://medicalstore.mashupstack.com/api/medicine/search?keyword=${search}`
        let res = await fetch(url, {
          method:"GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        })
        let data = await res.json()
        setLoading(false)
        setMedicineList(data)
     }catch(err){
        console.log(err)
     }
  }

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      handleSearch()
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search])

  const handleId = (id)=>{
    setId(id)
  }

  const handleDelete = async()=>{
    setLoading(true)
    try{
       let url = `https://medicalstore.mashupstack.com/api/medicine/${id}`
      let res = await fetch(url, {
         method: "DELETE",
         headers:{
           "Content-Type": "application/json",
           "Authorization" :`Bearer ${localStorage.getItem("token")}`
         }
       })
       if(res.ok){
         toast({
          title: "Deleted",
          description: "Medicine Deleted Successfully",
          status: "success",
          duration: 2500,
          isClosable: true,
        })
        setLoading(false)
        setMedicineList((prevMedicineData) =>
        prevMedicineData.filter(
          (medicine) => medicine.id !== id
        ));
      }
    }catch(err){
      console.log(err)
    }
  }


  
  return (
    <>
    
     <form method="get" className="d-flex mb-4" role="search" id="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "35%"}} name="search"
            value={search} onChange={(e)=>setSearch(e.target.value)}
            />
           
          </form>
       {loading && <Loader/>}

       <div className="container">
        <h1 className="heading">Medicine List</h1>
       <div className="col d-flex justify-content-center justify-content-md-end align-items-center">
         <Link className="btn btn-primary mb-3" to="/users/add">
              Add Stock <i className="bi bi-plus-circle"></i>
            </Link>
       </div>
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Sl No</th>
      <th scope="col">Medicine Name</th>
      <th scope="col">Company</th>
      <th scope="col">Expiry Date</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
      {medicineList.map((medicine)=>{
        return(
          <>
          <tr>
          <th scope="row">{medicine.id}</th>
          <td>{medicine.name}</td>
          <td>{medicine.company}</td>
          <td>{medicine.expiry_date}</td>
          <td>
              <Link to={`/users/edit/${medicine.id}`} className="btn btn-secondary mx-2"><i className="bi bi-pencil-square"></i></Link>
          
    <button type="button" className="btn btn-danger" onClick={()=>handleId(medicine.id)} data-bs-toggle="modal" data-bs-target="#exampleModal{{this._id}}" data-backdrop="false">
     <i className="bi bi-trash3"></i>
    </button>
          </td>
          </tr>
          </>
        )
      })}
    

  </tbody>
</table>
       </div>
   

<div className="modal fade" id="exampleModal{{this._id}}" tabIndex="-1" aria-labelledby="exampleModalLabel{{this._id}}" aria-hidden="true" data-backdrop="false" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-secondary" id="exampleModalLabel{{this._id}}">Delete option</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-secondary">
       Are you sure to delete this item?
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">Delete</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default TableCard
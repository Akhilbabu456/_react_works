
import { useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate()
  let toast = useToast()
  const [loading, setLoading] = useState(false)

  const handleLogout = async()=>{
    setLoading(true)
    const url = "https://medicalstore.mashupstack.com/api/logout"
    const res = await fetch(url,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
     await res.json()
    if(res.ok){
      setLoading(false)
      navigate("/")
      localStorage.removeItem("token")
      toast({
        title: "Logout Successfully",
        status: "success",
        duration: 2500,
        isClosable: true,
      })
    }
  }
  return (
    <>
      <nav
        className="navbar navbar-expand-lg border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/users">
            <img src="/logo.png" alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/users" hidden>
                  Home
                </Link>
              </li>
            </ul>

          <Link className="mx-3" to="/users">
              Home
            </Link>
            <br />
           
            <div className="dropdown-center mx-3">
              <button
                className="btn btn-secondary text-light"
                type="button"
                onClick={handleLogout}
              >
                {loading? <Loader size={5} color={"#fff"}/>: "Logout"}
              </button>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

import { useState } from "react";


const AddCard = () => {
    const [authScreen, setAuthScreen] = useState("add");

  return (
    <div>
     <div className={authScreen==="add" ? "container1 ":"container1 sign-up-mode" }>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Add Medicine</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Medicine name" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Company" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="date" placeholder="Date" />
            </div>
            
            <input type="submit" value="Login" className="btn1 solid" />
            
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Update Medicine</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Medicine name" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Company" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="date" placeholder="Medicine name" />
            </div>

            <input type="submit" className="btn1" value="Sign up" />
           
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Want to Update medicine</h3>
            <button className="btn transparent" id="sign-up-btn"
            onClick={()=>{
              setAuthScreen("signup")
            }}
            >
              Update Medicine
            </button>
          </div>
          <img src="/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Want to add medicine</h3>
            <button className="btn transparent" id="sign-in-btn"
            onClick={()=>{
              setAuthScreen("add")
            }}
            >
             Add medicine
            </button>
          </div>
          <img src="/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>

    </div>
  )
}



export default AddCard
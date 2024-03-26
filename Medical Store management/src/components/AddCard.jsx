


const AddCard = () => {


  return (
    <div>
      <div className="container1 ">
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

              <input type="submit" value="Add Medicine" className="btn1 solid" />

            </form>

          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">

            </div>
            <img src="/log.svg" className="image" alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}



export default AddCard


const UpdateCard = () => {


  return (
    <div>
      <div className="container1">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
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
                <input type="date" placeholder="Date" />
              </div>

              <input type="submit" value="Update" className="btn1" />

            </form>
          </div>
        </div>


        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">

            </div>
            <img src="/register.svg" className="image" alt="" />
          </div>

        </div>
      </div>

    </div>
  )
}



export default UpdateCard


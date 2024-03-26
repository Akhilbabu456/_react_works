import {Link} from "react-router-dom"

const TableCard = () => {
  return (
    <>
       <div className="container">
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
          <a href="/users/edit/:id" className="btn btn-secondary mx-2"><i className="bi bi-pencil-square"></i></a>
      
<button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal{{this._id}}" data-backdrop="false">
 <i className="bi bi-trash3"></i>
</button>
      </td>
    </tr>
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
        <a href="/user/remove/{{this._id}}" className="btn btn-danger">Delete</a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default TableCard
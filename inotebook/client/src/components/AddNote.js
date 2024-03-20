import React, {useContext, useState} from "react"
import noteContext from "../context/notes/noteContext"

const AddNote = () =>{
	const context = useContext(noteContext)
	const {addNote} = context

	const [note, setNote] = useState({title: "", description: "", tag: ""})
	
	const handleClick = (e) =>{
		e.preventDefault()
        addNote(note)
	}

	const onChange = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
	}
	return(
        <div className="container my-4">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
		)
}

export default AddNote
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
  const host = "http://localhost:5000";
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
   
    const getNotes = async()=>{
      try {
        const response = await fetch(`${host}/api/notes/fetchnotes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${ localStorage.getItem("token")}`,
          },
        });
    
        const json = await response.json();
        if (json) {
          setNotes(json);
        } else {
          throw new Error(json.error);
        }
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    const addNote = async(title, description, tag)=>{
      const response = await fetch(`${host}/api/notes/addnotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",	
          "Authorization":`Bearer ${ localStorage.getItem("token")}`,
        },
        body: JSON.stringify({title, description, tag})
      })
      const note = await response.json()
        setNotes(notes.concat(note))
    }
    const deleteNote = async(id)=>{
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",	
          "Authorization":`Bearer ${ localStorage.getItem("token")}`,
        },
       
      })
      const json = await response.json()
      console.log(json)
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes)
    }
    const editNote = async (id, title, description, tag)=>{

      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",	
          "Authorization":`Bearer ${ localStorage.getItem("token")}`,
        },
        body: JSON.stringify({id,title, description, tag})
      })
      const json = await response.json()
      setNotes(json)

      let newNotes = JSON.parse(JSON.stringify(notes))
      for(let index= 0; index < newNotes.length; index++){
        const element = newNotes[index]
        if(element._id ===id){
          element.title = title;
          element.description = description;
          element.tag = tag;
          break;
        }
      }
      setNotes(newNotes)
    }
    return(
      <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
          {props.children}
      </NoteContext.Provider>  
    )
}

export default NoteState;
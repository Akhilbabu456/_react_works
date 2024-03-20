import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [{
        
            "_id": "65f71c082f3f1473cd2e4c51",
            "user": "65f6ea4e164d592d1affcb13",
            "title": "sabhashh",
            "description": "sugam thanne appikale",
            "tag": "simple",
            "date": "2024-03-17T16:36:24.076Z",
            "__v": 0
          
    }]
    const [notes, setNotes] = useState(notesInitial)
   
    const addNote = (title, description, tag)=>{
      const  note= {
        
            "_id": "65f71c082f3f1473cd2e4c81",
            "user": "65f6ea4e164d592d1afgcb13",
            "title": "sabhashh aane",
            "description": "sugam thanne appikaleeeeeeee",
            "tag": "simple",
            "date": "2024-03-17T16:36:24.076Z",
            "__v": 0
          
    }
        setNotes(notes.concat(note))
    }
    const deleteNote = ()=>{

    }
    const editNote = ()=>{

    }
    return(
      <NoteContext.Provider value={{notes, setNotes}}>
          {props.children}
      </NoteContext.Provider>  
    )
}

export default NoteState;
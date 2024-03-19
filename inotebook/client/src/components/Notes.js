import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItem from './NoteItem'

function Notes() {
    const context = useContext(noteContext)
  const {notes} = context
  return (
    <div className="row my-4">
    <h1>You Notes</h1>
    {notes.map((note)=>{
      return <NoteItem key={note._id} note={note}/>
    })}
  </div>
  )
}

export default Notes

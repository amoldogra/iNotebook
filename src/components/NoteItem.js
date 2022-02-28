import React from 'react'

const NoteItem = (props) => {
   const  {note} = props.note
  return (
    <div>
        {note.title}
        {note.description}
        I</div>
  )
}

export default NoteItem;

import noteContext from './noteContext';
import { useState } from 'react';

const NoteState = (props)=>{
   const notesInitial = [
    {
      "_id": "62028bb3c131df10f188d0b3",
      "user": "620255aaf4c87411c0fa1d3c",
      "title": "My notebook",
      "description": "JAtt de capie",
      "tag": "personal",
      "__v": 0,
      "date": "2022-02-28T17:08:41.063Z"
    },
    {
      "_id": "62028bb4c131df10f188d0b5",
      "user": "620255aaf4c87411c0fa1d3c",
      "title": "My notebook",
      "description": "JAtt de capie",
      "tag": "personal",
      "__v": 0,
      "date": "2022-02-28T17:08:41.063Z"
    }]
        const [notes, setNotes] = useState(notesInitial)
    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState; 
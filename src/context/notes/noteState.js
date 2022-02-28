
import noteContext from './noteContext';
//import { useState } from 'react';

const noteState = (props)=>{
   
   
    return(
        <noteContext.Provider value={{}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default noteState; 
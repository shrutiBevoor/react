import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task=()=>
{
    return(
        <div>
            <ToastContainer/>
            <h1>Toast</h1>
            <button onClick={()=>
            {
                var a=10;
                var b=20;
                var c=a+b;
                toast.error(`The value of ${c}`,{position:toast.POSITION.BOTTOM_CENTER})
            }}>success</button>
        </div>
    )
}
export default Task

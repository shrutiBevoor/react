import React from "react";
import JSON from './course.json'
import Course from './Course.jsx'

const App1=()=>
{
    return(
        <div><Course data={JSON}/></div>
    )
}
export default App1


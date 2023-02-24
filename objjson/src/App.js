import React from 'react'
import JSON from './course.json'
import Course  from './Course.jsx'
import './global.css'

const App=()=>
{
    return(
        <div>
            <Course data={JSON}/>
        </div>
    )
}
export default App
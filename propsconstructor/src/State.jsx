import React from 'react'
import { Component } from 'react'
import App from './App'
class state extends Component
{
    state={
        "username":"shruti",
        "skills":[
            "core java","sql","web technology"
        ],
        "price":300,
        "available":true 
    }
    render()
    {
        return(
            <div>
                {this.state.username};
                {this.state.skills.map((x)=>
                {
                    return(
                        <ul>
                            <li>{x}</li>
                        </ul>
                    )

                })}
            </div>
            
        )
    }
}
export default state;
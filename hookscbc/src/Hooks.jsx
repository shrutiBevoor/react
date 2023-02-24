import React, { Component } from 'react'


class Hooks extends Component
{
    constructor()
    {
        super()
            this.state={userName:"shruti"}
    }
    handlechange=function()
    {
        console.log(this);
        this.setState({userName:"pinky"})
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.userName}</h1>
                <button onClick={this.handlechange.bind(this)}>click here</button>
            </div>
        )
    }
}
export default Hooks
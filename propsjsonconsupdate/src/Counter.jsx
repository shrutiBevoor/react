import React from 'react'
import { Component } from 'react'

class counter extends Component
{
    constructor()
    {
        super()
        this.state={count:0}
    }
    handleIncrement=()=>
    {
        this.setState({count:this.state.count+1})
    }
    handleDecrement=()=>
    {
        this.setState({count:this.state.count-1})
    }
    handlerreset=()=>
    {
        this.setState({count:0})
    }
    render()
    {
        return(<div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>+ Increment</button>
        <button onClick={this.handleDecrement}>- Decrement</button>
        <button onClick={this.handlerreset}>Reset</button>
        </div>)
    }
}
export default counter;
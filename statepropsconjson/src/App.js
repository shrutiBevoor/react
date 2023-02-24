import React, { Component } from 'react'
import Employee from './Employee.jsx'
import JSON from './task.json'
class App extends Component
{
  constructor()
  {
    super()
    this.state={empDetails:JSON}
  }
  render()
  {
    return(
      <div>
        <Employee empDetails1={this.state.empDetails}/>
      </div>
    )
  }
}
export default App;
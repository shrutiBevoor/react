import React, { Component } from 'react'
class App extends Component
{
  
  constructor()
  {
    super()
    this.state={
      student_id:100,
      student_name:"shruti"}
  }
  handleClick(){
    // Changing state
    this.setState({student_id:this.state.student_id})
  }
  render()
  {
    return(
      <table border="2px">
        <tr>
          <td>studentid</td>
          <td>studentname</td>
          <td>Update</td>
        </tr>
        <tr>
          <td>{this.state.student_id}</td>
          <td>{this.state.student_name}</td>
          <td><button onClick={this.handleClick}>update</button></td>
        </tr>
      </table>
    )
  }

}
export default App;

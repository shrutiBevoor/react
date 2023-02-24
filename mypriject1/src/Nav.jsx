 import React, { Component } from "react"

// const Nav=(props)=>
// {
//     return(
//         <div>{props.data.User}</div>
//     )
// }
// export default Nav;


//class based 
class Nav extends Component
{
    render()
    {
        return(
            <img src={this.props.data} alt=""/>
        )
    }
}
export default Nav
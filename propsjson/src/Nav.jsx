import React from 'react'
import { Component } from 'react'

class Nav extends Component
{
    render()
    {
         return(
            <img src={this.props.data}/>
         )
    }

}
export default Nav;
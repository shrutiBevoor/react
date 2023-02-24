import React from "react";
const Menu=()=>
{
    return(
        <div className="menuBar">
            <ul>
                <li>
                  <input type="text">login</input>
                </li>
                <li>
                    <a href="Login">Best Sellers</a>
                </li>
                <li>
                    <a href="Login">More</a>
                </li>
                <li>
                    <a href="Login">Cart</a>
                </li>
            </ul>
        </div>
    )
}
export default Menu;
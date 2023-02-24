import React from "react";
import { Component } from "react";
class course extends Component
{
    render()
    {
        let payloadData=this.props.data;
        return(
            <div className="mainBlock">
                <center>
                <div>
                      <img src={payloadData[0].photo} alt=""/>
                      <h1>{payloadData[0].trainer_nam}</h1>
                      <p>{payloadData[0].course_nam}</p>
                      <p>{payloadData[0].languages}</p>
                </div>
                </center>
                <center>
                <div>
                     <img src={payloadData[1].photo} alt=""/>
                     <h1>{payloadData[1].trainer_nam}</h1>
                     <p>{payloadData[1].course_nam}</p>
                      <p>{payloadData[1].languages}</p>
                </div>
                </center>
                <center>
                <div>
                     <img src={payloadData[1].photo} alt=""/>
                     <h1>{payloadData[0].trainer_nam}</h1>
                     <p>{payloadData[0].course_nam}</p>
                      <p>{payloadData[1].languages}</p>
                </div>
                </center>
            </div>
        )
    }
}
export default course;
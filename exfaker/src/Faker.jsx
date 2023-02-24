import React from 'react'
import { faker } from '@faker-js/faker';
import { Component } from 'react';

class Faker extends Component
{
    constructor()
    {
        super()
        {
        this.state={PHOTO:faker.image.nature()}
        }
    }
    handleimage=()=>
    {
        this.setState({PHOTO:faker.image.nature()})
    }
    render()
    {
        return(
            <div>
                <img src={this.state.PHOTO} alt=""/>
                <button onClick={this.handleimage}>CHANGE IMAGE</button>
            </div>
        )
    }
}

export default Faker
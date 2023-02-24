import React from 'react'
import { faker } from '@faker-js/faker';
import { Component } from 'react';

class Faker extends Component
{
    constructor()
    {
        super()
        {
            this.state={PHOTO:faker.image.avatar()}
        }
    }
    handleimg=()=>
    {
        this.setState({PHOTO:faker.image.avatar()})
    }
    render()
    {
        return(
            <div>
                <img src={this.state.PHOTO} alt=""/>
                <button onClick={this.handleimg}>CHANGE IMAGE</button>
            </div>
        )
    }
}
export default Faker;
import React, { Component } from 'react'
import data from './pokemon.js'

export default class PokeItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.pokemon}</h1>
                <img src={this.props.url_image} alt='' />
                <p>attack: {this.props.attack}</p>
                <p>defense: {this.props.defense}</p>
                <p>ability: {this.props.ability_1}</p>
            </div>
        )
    }
}

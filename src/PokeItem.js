import React, { Component } from 'react'
import './App.css';

export default class PokeItem extends Component {
    render() {
        return (
            <div className="poke-card">
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt='' />
                <p>attack: {this.props.attack}</p>
                <p>defense: {this.props.defense}</p>
                <p>ability: {this.props.ability}</p>
            </div>
        )
    }
}

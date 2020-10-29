import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import data from './pokemon.js';
import './App.css';
export default class PokeList extends Component {

    render() {
        const filteredAnimals = data.filter((poke) => {
            if (!this.props.namedPoke) return true;
            if (poke.pokemon === this.props.namedPoke) return true;
            return false;
        })
        return (
            <div className="poke-list">
                {
                    filteredAnimals.map(pokemon =>
                        <PokeItem
                            name={pokemon.pokemon}
                            image={pokemon.url_image}
                            attack={pokemon.attack}
                            defense={pokemon.defense}
                            ability={pokemon.ability_1} />)
                }
            </div>
        )
    }
}

import React, { Component } from 'react'
import PokeItem from './PokeItem.js';
import data from './pokemon.js';
import './App.css';
export default class PokeList extends Component {


    render() {
        return (
            <div className="poke-list">
                {
                    data.filter((poke) => {
                        if (!this.props.namedPoke) return true;
                        if (poke.pokemon === this.props.namedPoke) return true;
                        return false
                    })

                        .filter((poke) => {
                            console.log(1);
                            if (!this.props.attackFiltered) return true;
                            if (+poke.attack <= +this.props.attackFiltered && +poke.attack > (+this.props.attackFiltered - 20)) return true;
                            return false
                        })

                        .filter((poke) => {
                            if (!this.props.defenseFiltered) return true;
                            if (+poke.defense <= +this.props.defenseFiltered && +poke.defense > (+this.props.defenseFiltered - 20)) return true;
                            return false
                        })

                        .map(pokemon => {
                            return <PokeItem
                                name={pokemon.pokemon}
                                image={pokemon.url_image}
                                attack={pokemon.attack}
                                defense={pokemon.defense}
                                ability={pokemon.ability_1} />
                        })
                }
            </div>
        )
    }
}

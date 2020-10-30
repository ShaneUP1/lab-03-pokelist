import React, { Component } from 'react'
import request from 'superagent';
import Header from './Header.js';

export default class ListPage extends Component {

    state = {
        namedPoke: '',
        submittedPokemon: '',
        attackFiltered: '',
        defenseFiltered: '',
        orderFiltered: '',
        pokeArray: []
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleForm = async (e) => {
        e.preventDefault()
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.namedPoke}`)
        this.setState({ pokeArray: data.body.results })
    }

    handleSearchChange = (e) => {
        this.setState({
            namedPoke: e.target.value
        })
    }





    handleAttackFilter = (e) => {
        this.setState({
            attackFiltered: e.target.value
        })
    }

    handledefenseFilter = (e) => {
        this.setState({
            defenseFiltered: e.target.value
        })
    }


    render() {
        return (
            <>
                <div className="search-form">
                    <form onSubmit={this.handleForm}>
                        Looking for someone specific?
                <input type='text' onChange={this.handleSearchChange} />
                        <button>Search by Character Name</button>
                    </form>
                    <div className="main">
                        {
                            this.state.pokeArray.length === 0
                                ? 'Be Patient, Still Loading'
                                : this.state.pokeArray.map(poke =>
                                    <div className='poke-card'>
                                        <h2>{poke.pokemon}</h2>
                                        <img src={poke.url_image} alt="" width="120" height="200" />
                                        <p>attack: {poke.attack}</p>
                                        <p>defense: {poke.defense}</p>
                                        <p>ability: {poke.ability_1}</p>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </>

        )
    }
}
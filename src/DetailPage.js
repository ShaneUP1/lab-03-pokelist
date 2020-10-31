import React, { Component } from 'react'
import request from 'superagent';
import pokemon from './pokemon';

export default class DetailPage extends Component {
    state = {
        pokemon: []
    }

    componentDidMount = async () => {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.pokemon}`)
        this.setState({ pokemon: data.body.results })
        console.log(this.state);
    }

    render() {

        return (
            <div>
                <h1>{this.props.match.params.pokemon} Page</h1>
                {
                    this.state.pokemon.length === 0
                        ? 'loading!!!'
                        : this.state.pokemon.map(poke => <div key={poke.pokemon}>
                            <img src={poke.url_image} alt="" width="120" height="200" />
                            <h2>{poke.pokemon}</h2>
                            <p>attack: {poke.attack}</p>
                            <p>defense: {poke.defense}</p>
                            <p>ability: {poke.ability_1}</p>
                        </div>
                        )
                }
            </div>
        )
    }
}


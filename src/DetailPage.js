import React, { Component } from 'react'
import request from 'superagent';

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
                <h1>{this.props.match.params.pokemon} page</h1>
                {
                    this.state.pokemon.length === 0
                        ? <iframe title="my pokemon spinner" src="https://giphy.com/embed/slVWEctHZKvWU" width="480" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        : this.state.pokemon.map(poke => <div className="detail-card" key={poke.pokemon}>
                            <img src={poke.url_image} alt="" width="120" height="200" />
                            <h2>{poke.pokemon}</h2>
                            <p>attack: {poke.attack}</p>
                            <p>defense: {poke.defense}</p>
                            <p>ability: {poke.ability_1}</p>
                            <p>height: {poke.height}</p>
                            <p>weight: {poke.weight}</p>
                            <p>shape: {poke.shape}</p>

                        </div>
                        )
                }
            </div>
        )
    }
}


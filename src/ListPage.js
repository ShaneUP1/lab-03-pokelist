import React, { Component } from 'react'
import request from 'superagent';
import { Link } from 'react-router-dom'
export default class ListPage extends Component {

    state = {
        namedPoke: '',
        submittedPokemon: '',
        attackFiltered: '',
        defenseFiltered: '',
        orderFiltered: '',
        pokeArray: [],
        orderList: '',
        sortList: ''
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    handleForm = async (e) => {
        e.preventDefault()
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.namedPoke}&direction=${this.state.orderList}&sort=${this.state.sortList}&perPage=20`)
        this.setState({ pokeArray: data.body.results })
    }

    handleSearchChange = (e) => {
        this.setState({
            namedPoke: e.target.value
        })
    }

    handleOrder = async (e) => {
        await this.setState({
            orderList: e.target.value
        })
        await this.fetchPokemon();
    }

    handleSort = async (e) => {
        await this.setState({
            sortList: e.target.value
        })
        await this.fetchPokemon();
    }

    handleClick = async (poke) => {
        this.props.history.push(`/detail/${poke.pokemon}`);
    }


    render() {

        return (
            <>
                <div className="search-form">
                    <form onSubmit={this.handleForm}>
                        <input type='text' onChange={this.handleSearchChange} />
                        <button>Search by Name</button>
                    </form>
                </div>
                <div className='dropdowns'>
                    <select onChange={this.handleOrder}>
                        <option value=''>Any Order</option>
                        <option value='asc'>Ascending</option>
                        <option value='desc'>Descending</option>
                    </select>
                </div>
                <select onChange={this.handleSort}>
                    <option value=''>Sort By</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>
                </select>
                <div className="main">
                    {this.state.pokeArray.length === 0
                        ? <iframe title="my pokemon spinner" src="https://giphy.com/embed/slVWEctHZKvWU" width="480" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                        : this.state.pokeArray.map(poke =>
                            <Link to={`/list/detail/${poke.pokemon}`}>
                                <div className='poke-card' onClick={() => this.handleClick(poke)}>
                                    <h2>{poke.pokemon}</h2>
                                    <img src={poke.url_image} alt="" width="120" height="200" />
                                    <p>attack: {poke.attack}</p>
                                    <p>defense: {poke.defense}</p>
                                    <p>ability: {poke.ability_1}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </>
        )
    }
}
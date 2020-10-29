import React, { Component } from 'react'
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';
import Sort from './Sort.js'

export default class ListPage extends Component {


    state = {
        namedPoke: '',
        submittedPokemon: '',
        attackFiltered: '',
        defenseFiltered: '',
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

    handleSearchChange = (e) => {
        this.setState({
            namedPoke: e.target.value
        })
    }

    handleForm = (e) => {
        e.preventDefault()
        this.setState({
            submittedPokemon: this.state.namedPoke
        })
    }



    render() {
        return (
            <div>
                <SearchBar searchFilter={this.handleForm} name={this.handleSearchChange} />
                <Sort attackFilter={this.handleAttackFilter} defenseFilter={this.handledefenseFilter} />
                <PokeList namedPoke={this.state.submittedPokemon} attackFiltered={this.state.attackFiltered} defenseFiltered={this.state.defenseFiltered} />
            </div>
        )
    }
}

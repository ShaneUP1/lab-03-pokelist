import React from 'react'
import './App.css';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar';

export default class App extends React.Component {

  state = {
    namedPoke: '',
    submittedPokemon: ""
  }

  handleSearchChange = (e) => {
    this.setState({
      namedPoke: e.target.value
    })
  }

  handleForm = (e) => {
    e.preventDefault()
    console.log(this.state.namedPoke)
    this.setState({
      submittedPokemon: this.state.namedPoke
    })
  }


  render() {
    return (
      <div className="App" >

        <div className="poke-list">
          <SearchBar searchFilter={this.handleForm} name={this.handleSearchChange} />
          <PokeList namedPoke={this.state.submittedPokemon} />
        </div>
      </div>
    );
  }
}

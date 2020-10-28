import React from 'react'
import './App.css';
import PokeList from './PokeList.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" >

        <div className="poke-list">
          <PokeList />
        </div>
      </div>
    );
  }
}

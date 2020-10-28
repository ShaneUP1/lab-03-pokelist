import React from 'react'
import './App.css';
import PokeItem from './PokeItem.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">

        </header>
        <PokeItem />
      </div>
    );
  }
}

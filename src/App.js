import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import ListPage from './ListPage.js'
import HomePage from './HomePage.js'
import Header from './Header.js'
import DetailPage from './DetailPage.js'

export default class App extends React.Component {

  render() {
    return (
      <div className="App" >
        <div className="poke-list">
          <Router>
            <Header />
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <HomePage {...routerProps} />}
              />
              <Route
                path="/list"
                exact
                render={(routerProps) => <ListPage {...routerProps} />}
              />
              <Route
                path="/list/detail/:pokemon"
                exact
                render={(routerProps) => <DetailPage {...routerProps} />}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}




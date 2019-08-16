import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from "react-redux";
import CreateFormContainer from './components/Login/createuser'
import GameList from './components/GameList'
import Game from './components/Game'
import {url} from "./constants";
import {allGames, loginUser, AUTH_TOKEN_KEY} from "./actions";
import GameJoin from './components/GameJoin'

class App extends React.Component {

  source = new EventSource(`${url}/game`)

  componentDidMount() {
    this.subscribeToStream();
    this.getAuthToken();
  }

  subscribeToStream() {
    this.source.onmessage = (event) => {
      const games = JSON.parse(event.data)

      console.log('EVENT DATA', event.data)

      this
        .props
        .allGames(games)
    }
  }

  getAuthToken() {
    const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
    console.log('App token', token);
    if (token) {
      this
        .props
        .loginUser(token);
    }
  }

  render() {
    return (
      <main>
        <Route path='/' exact component={GameList}/>
        <Route path='/create-user' exact component={CreateFormContainer}/>
        <Route path='/gamelist' component={GameList}/>
        <Route path='/game/:id' component={Game}/>
        <Route path='/join/:gameId' component={GameJoin}/>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
      games: state.games
  }


const mapDispatchToProps = {
  allGames,
  loginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

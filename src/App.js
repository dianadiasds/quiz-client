import React from 'react';
import { Route } from 'react-router-dom'
import {connect} from "react-redux";
import CreateFormContainer from './components/Login/createuser'
import GameList from './components/GameList'
import Game from './components/Game'
import {url} from "./constants";
import {allGames} from "./actions";
import GameJoin from './components/GameJoin'

class App extends React.Component {

    source = new EventSource(`${url}/game`)


    componentDidMount () {
        this.source.onmessage = (event) => {
            const games = JSON.parse(event.data)

            console.log('game did:', games)

            this.props.allGames(games)
        }
    }

  render(){
    return (
        <main>
            <Route path='/' exact component={GameList}/>
            <Route path='/create-user' exact component={CreateFormContainer}/>
            <Route path='/gamelist' component={GameList}/>
            <Route path='/game/:id' component={Game} />
            <Route path='/join/:gameId' component={GameJoin} />
        </main>
    );
  }
}

function mapStateToProps(state) {
  return {
      setUser: state.setUser
  }
}

const mapDispatchToProps = {
  allGames

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import React from 'react';
import { Route } from 'react-router-dom'
import {connect} from "react-redux";
import CreateFormContainer from './components/Login/createuser'
import GameList from './components/GameList/index'
import {allGames} from './actions'

class App extends React.Component {
  source = new EventSource(`http://localhost:5000/game`)

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
export default connect(mapStateToProps, mapDispatchToProps
)(App)

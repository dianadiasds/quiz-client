import React from 'react'
import {connect} from 'react-redux'
import LoginFormContainer from '../Login'
import {Link} from 'react-router-dom'
import {setUser} from '../../actions'
import * as request from 'superagent'
import {url} from '../../constants'

class GameList extends React.Component {
  state = {
    games: [],
    showMe: true
  }
  componentDidMount() {
    setUser()
  }
  onClick = async() => {
    const token = this.props.jwt
    await request
      .post(`${url}/game`)
      .set('authorization', `Bearer ${token}`)
  }

  render() {
    console.log('props test:', this.props)
    const {games, jwt} = this.props

    const list = games
      ? games
        .reverse()
        .map(game => {
          return (
            <Link key={game.id} to={`/join/${game.id}`}>
              <div>Game {game.id}</div>
            </Link>
          );
        })
      : null;

    const listWithButton = (
      <div>
        <button onClick={this.onClick}>New Game</button>
        {list}
      </div>
    )

    const noJwt = jwt === null;
    console.log('noJwt test:', noJwt)

    return (
      <main>
        {noJwt
          ? <LoginFormContainer/>
          : listWithButton
}
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {games: state.games, jwt: state.jwt, setUser: state.setUser}
}

export default connect(mapStateToProps, {setUser})(GameList)
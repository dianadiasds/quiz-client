import React from 'react'
import { connect } from 'react-redux'
import LoginFormContainer from '../Login'
import { Link } from 'react-router-dom'

class GameList extends React.Component {
  state={ games: [], showMe: true}

  onClick = () => {
    console.log('onClick test!')
    this.setState({
      showMe: false
    })
  }

  render () {
    console.log('props test:', this.props)
    const { games, jwt } = this.props

    const list = games
      ? games.map(game => <Link
        key={game.id}
        to={`/game/${game.id}`}
      >
        <div>Game {game.id}</div>
      </Link>)
      : null;

    console.log('list:', list)
    console.log('jwt:', jwt)

    const noJwt = jwt === ''
    console.log('noJwt test:', noJwt)

    return <main>
      {
        noJwt
          ? <LoginFormContainer onClick={this.onClick} />
          : list
      }
    </main>
  }
}

function mapStateToProps (state) {
  return {
    games: state.games,
    jwt: state.jwt
  }
}


export default connect(
  mapStateToProps, null
)(GameList)
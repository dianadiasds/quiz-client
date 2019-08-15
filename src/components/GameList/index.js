import React from 'react'
import { allGames } from '../../actions'
import { connect } from 'react-redux'
import LoginFormContainer from '../Login'

import { Link } from 'react-router-dom'

class GameList extends React.Component {
  state={ games: [], showMe: true}

  source = new EventSource('http://localhost:5000/game')

  componentDidMount () {
    this.source.onmessage = (event) => {
      const games = JSON.parse(event.data)
      console.log('EVENT DATA 1:', event.data)

      console.log('GAMES', games)

      this.props.allGames(games)
    }
  }

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

const mapDispatchToProps = {
  allGames
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(GameList)
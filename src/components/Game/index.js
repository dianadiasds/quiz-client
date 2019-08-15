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

    return <main>
      {
        jwt === ''
          ? <LoginFormContainer onClick={this.onClick} />
          : list
      }
    </main>
  }
}

function mapStateToProps (state) {
  return {
    games: state.games,
    user: state.user
  }
}

const mapDispatchToProps = {
  allGames
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(GameList)
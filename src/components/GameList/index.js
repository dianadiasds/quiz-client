import React from 'react'
import {connect} from 'react-redux'
import LoginFormContainer from '../Login'
import {Link} from 'react-router-dom'
import {setUser} from '../../actions'

class GameList extends React.Component {
  state = {
    games: [],
    showMe: true
  }
  componentDidMount() {
    setUser()
  }
  onClick = () => {
    console.log('onClick test!')
    this.setState({showMe: false})
  }

  render() {
    console.log('props test:', this.props)
    const {games, jwt} = this.props

    const list = games
      ? games.map(game => {
        return (
          <Link key={game.id} to={`/join/${game.id}`}>
            <div>Game {game.id}</div>
          </Link>
        );
      })
      : null;

    console.log('list:', list)
    console.log('jwt:', jwt)

    const noJwt = jwt === null;
    console.log('noJwt test:', noJwt)

    return (
      <main>
        {noJwt
          ? <LoginFormContainer onClick={this.onClick}/>
          : list
        }
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {games: state.games, jwt: state.jwt, setUser: state.setUser}
}

export default connect(mapStateToProps, {setUser})(GameList)
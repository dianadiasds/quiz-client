import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class GameList extends React.Component {
	render() {
		const {games} = this.props

		console.log('render games test:', games)

		const list = games.map(game =>
			<Link key={game.id} to={`/game/${game.id}`}>
				<div>{game.id}</div>
			</Link>)

		return <div>{list}</div>
	}
}

function mapStateToProps(state) {
	return {
		games: state.games
	}
}

export default connect(mapStateToProps)(GameList)

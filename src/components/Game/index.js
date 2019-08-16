import React from 'react'
import { connect } from 'react-redux'
import * as request from 'superagent'
import { url } from '../../constants'
import View from './view'


class Game extends React.Component {

		onClick = async (event) => {
			const { id } = this.props.match.params
			const token = this.props.jwt
			console.log('event.target.value test:', event.target.value)

			await request
				.put(`${url}/answer/${id}`)
				.set('authorization', `Bearer ${token}`)
				.send({
					jwt: this.props.jwt,
					answer: event.target.value
				})
		}

    render () {

			const { id } = this.props.match.params

			console.log('id test:', id)

			const { games } = this.props

			console.log('Game games test:', games)

			const game = games.length && games.find(game => {
				const isMatch = game.id === parseInt(id)

				return isMatch
			})

			console.log('game test:', game)

			const content = game
				? <View question={game.question} onClick={this.onClick}/>
				: 'Loading...'

			return <div>
				<h1>Game {id}</h1>

				{content}
    	</div>
    }
}

function mapStateToProps (state) {
	return {
		games: state.games,
		jwt: state.jwt
	}
}

export default connect(mapStateToProps)(Game)


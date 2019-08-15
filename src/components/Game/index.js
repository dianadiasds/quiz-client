import React from 'react'
import { connect } from 'react-redux'

function Question ({ question }) {
	console.log('Question question test:', question)

	const { answer } = question

	const list = answer.map(answer => <button onSubmit={onsubmit}>{answer}</button>)

	return <div>
		Question: {question.question}

		<h5>Answers</h5>
		{list}
	</div>
}

class Game extends React.Component {
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
				? <Question question={game.question} />
				: 'Loading...'

			return <div>
				<h1>Game {id}</h1>

				{content}
    	</div>
    }
}

function mapStateToProps (state) {
	return {
		games: state.games
	}
}

export default connect(mapStateToProps)(Game)


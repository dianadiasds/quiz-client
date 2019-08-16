import React from 'react'


export default function View ( props) {
	console.log('props:', props)
	const { onClick} = props
	const { game } = props
	const { question, winnerId} = game
	const { answer } = question

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	}
	const list = answer.map(answer => <button className='answerButton' key={answer} onClick={onClick} value={answer}>{answer}</button>)

	shuffle(list)

	const winner = game.users.find(user => user.id === winnerId)

	const usersNames = game.users.map(user => <p className='bold' key={user.id}>Player: {user.name} - Score: {user.score}</p>)


	const content = winner
		? <div>The winner is {winner.name}</div>
		: <div>

			{usersNames}


			Question: {question.question}

			<h5 >Answers</h5>


			{list}
		</div>

	return content
}

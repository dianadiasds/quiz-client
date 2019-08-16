import React from 'react'


export default function View ( props) {
	console.log('props:', props)
	const { onClick} = props
	const { question} = props

	const { answer } = question

	function shuffle(array) {
		array.sort(() => Math.random() - 0.5);
	}
	const list = answer.map(answer => <button key={answer} onClick={onClick} value={answer}>{answer}</button>)

	shuffle(list)

	return <div>
		Question: {question.question}

		<h5 >Answers</h5>

			{list}

	</div>
}

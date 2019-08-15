import React from 'react'
import * as request from 'superagent'
import {url} from '../../constants'
import {connect} from 'react-redux'

class GameJoin extends React.Component {
  state = {
    playersAmount: 0
  }

  handleJoin = async(event) => {
    event.preventDefault()
    const token = this.props.jwt

    await request
      .put(`${url}/join/${this.props.match.params.gameId}`)
      .set('authorization', `Bearer ${token}`)
      .then((response) => {
        console.log('RESPONSE:', response.body)
        const playersAmount = response.body.count;

        if (playersAmount) {
          this.setState({playersAmount})
        }
      })
  }

  handleStart = async(event) => {
    event.preventDefault()
    const token = this.props.jwt

    await request
      .put(`${url}/start/${this.props.match.params.gameId}`)
      .set('authorization', `Bearer ${token}`)
      .then(() => {
        this.props.history.push(`/game/${this.props.match.params.gameId}`)
      })
  }

  render() {
    const playersAmount = this.state.playersAmount;
    console.log('PROPS:', this.props)
    console.log('STATE:', this.state)
    return (
      <div>
        <h2>Game {this.props.match.params.gameId}</h2>
        {playersAmount >= 1 && <button onClick={this.handleStart}>Start</button>}
        {playersAmount < 1 && <button onClick={this.handleJoin}>Join</button>}
      </div>
    )
  }
}
function mapStateToProps(state) {
  return {jwt: state.jwt}
}

export default connect(mapStateToProps, null)(GameJoin)
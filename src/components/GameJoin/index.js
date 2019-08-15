  import React from 'react'
  import * as request from 'superagent'
  import {url} from '../../constants'
  import {connect} from 'react-redux'

  class GameJoin extends React.Component{
    state={userId: null, gameId: null}
    
    onClick = async (event) => {
      event.preventDefault()

      await request
        .put(`${url}/join/${this.state.gameId}`)
        .send({ id: this.state.userId , gameId: this.state.gameId})
    }
    render(){
      console.log('STATE:', this.state)
      return <div>
        <button>Start</button>
        <button onClick={this.onClick}>Join</button>
      </div>
    }
  }
  function mapStateToProps (state) {
    return {
      games: state.games,
      user: state.user
    }
  }

  export default connect(mapStateToProps,null)(GameJoin)
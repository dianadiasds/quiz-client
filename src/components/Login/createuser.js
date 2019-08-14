import React from 'react'
import View from './view'
import { connect } from 'react-redux'
import { newLogin } from '../../actions'
import {Link} from 'react-router-dom'

class CreateFormContainer extends React.Component {
  state = { name: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.newLogin(this.state.name, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
      console.log("STATE:", this.state)
    return <div>
        <h3>New user</h3>
        <View
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
     <Link to='/'>Go back</Link>
    </div>
  }
}

export default connect(null, { newLogin })(CreateFormContainer)

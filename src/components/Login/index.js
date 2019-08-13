import React from 'react'
import View from './view'
import { connect } from 'react-redux'
import { login } from '../../actions'

class LoginFormContainer extends React.Component {
  state = { name: '', password: '' }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.name, this.state.password)
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
      console.log("STATE:", this.state)
    return <View
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
  }
}

export default connect(null, { login })(LoginFormContainer)

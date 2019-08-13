import React from 'react'
import View from './view'
//import {setUser} from '../actions'
import {connect} from 'react-redux'

class LoginForm extends React.Component {
    render() {
        return <View onSubmit={this.onSubmit}/>
    }
}
const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(LoginForm)

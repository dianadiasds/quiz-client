import React from 'react';
import { Route } from 'react-router-dom'
//import {allChannels} from "./actions";
import {connect} from "react-redux";
import LoginFormContainer from './components/Login/index'
import CreateFormContainer from './components/Login/createuser'

class App extends React.Component {
  render(){
    return (
        <main>
            <Route path='/' exact component={LoginFormContainer}/>
            <Route path='/create-user' exact component={CreateFormContainer}/>
        </main>
    );
  }
}

function mapStateToProps(state) {
  return {
      setUser: state.setUser
  }
}

const mapDispatchToProps = {
//  allChannels
}
export default connect(mapStateToProps, mapDispatchToProps
)(App)

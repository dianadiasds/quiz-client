import React from 'react';
import { Route } from 'react-router-dom'
//import {allChannels} from "./actions";
import {connect} from "react-redux";
import LoginForm from './components/Login'

class App extends React.Component {
  render(){
    return (
        <main>
            <Route path='/' exact component={LoginForm}/>
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

import {combineReducers} from 'redux'
import setUser from './login'
import jwt from './jwt'
import games from './games'


export default combineReducers({
    setUser,
    jwt,
    games
})

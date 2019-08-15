import {combineReducers} from 'redux'
import user from './user'
import jwt from './jwt'
import games from './games'


export default combineReducers({
    user,
    jwt,
    games
})

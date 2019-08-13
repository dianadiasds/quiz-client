import {combineReducers} from 'redux'
import setUser from './login'
import jwt from './jwt'


export default combineReducers({
    setUser,
    jwt
})

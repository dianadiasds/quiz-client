import * as request from 'superagent'

const baseUrl = 'http://localhost:5000'

export const SET_USER = 'SET_USER'

export function setUser(payload) {
  return {type: SET_USER, payload}
}

export const JWT = 'JWT'
export const AUTH_TOKEN_KEY = 'auth-token';

export function loginUser(payload) {
  return {type: JWT, payload}
}

export const login = (name, password) => dispatch => {
  console.log('request')
  request
    .post(`${baseUrl}/login`)
    .send({name, password})
    .then(response => {
      console.log('LOGIN:', response.body)
      const token = response.body.jwt;
      const action = loginUser(token)
      sessionStorage.setItem(AUTH_TOKEN_KEY, token);

      dispatch(action)
    })
    .catch(console.error)
}

export const NEW_USER = 'NEW_USER'

function newUser(payload) {
  return {type: NEW_USER, payload}
}

export const newLogin = (name, password) => dispatch => {
  console.log('request')
  request
    .post(`${baseUrl}/user`)
    .send({name, password})
    .then(response => {
      console.log('NEW LOGIN:', response.body)
      const action = newUser(response.body)

      dispatch(action)
    })
    .catch(console.error)
}

export const ALL_GAMES = 'ALL_GAMES'

export function allGames(payload) {
  return {type: ALL_GAMES, payload}
}

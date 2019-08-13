import * as request from 'superagent'

export const SET_USER = 'SET_USER'

export function setUser(payload) {
    return {
        type: SET_USER,
        payload
    }
}

export const JWT = 'JWT'

const baseUrl = 'http://localhost:5000'

function loginUser(payload){
    return {
        type: JWT,
        payload
    }
}

export const login = (name, password) => dispatch=>{
    console.log('request' )
    request
        .post(`${baseUrl}/login`)
        .send({ name, password })
        .then(response => {
            console.log('LOGIN:', response.body)
            const action = loginUser(response.body.jwt)
      
            dispatch(action)
          })
          .catch(console.error)
}

export const NEW_USER = 'NEW_USER'
function newUser(payload){
    return {
        type: NEW_USER,
        payload
    }
}
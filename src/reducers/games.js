import {ALL_GAMES} from '../actions'

export default function games(state = [], action = {}) {
    switch (action.type) {
        case ALL_GAMES:
            return action.payload
        default:
            return state

    }

}

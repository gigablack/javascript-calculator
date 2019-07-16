import {NEW_NUMBER} from './actionTypes'

const newNumber = number => {
    return {
        type: NEW_NUMBER,
        number
    }
}

module.exports = newNumber
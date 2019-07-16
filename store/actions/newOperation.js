import {OPERATION} from './actionTypes'

const newOperation = operation => {
    return {
        type: OPERATION,
        operation
    }
}

module.exports = newOperation
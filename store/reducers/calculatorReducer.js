import {NEW_NUMBER,OPERATION} from '../actions/actionTypes'
import numberToScreen from './functions/numberToScreen'
import operationOnNumber from './functions/operationOnNumber'

const initialState = {
    screenDown: '0',
    resetable: true,
    screenUp: '0'
}

const calculatorReducer = (state = initialState,action) => {
    switch(action.type){
        case NEW_NUMBER:
            return numberToScreen(state,action.number)
        case OPERATION:
            return operationOnNumber(state,action.operation)
        default:
            return state
    }
}

module.exports = calculatorReducer
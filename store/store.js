import {createStore} from 'redux'
import calculatorReducer from './reducers/calculatorReducer'

const store = createStore(calculatorReducer)

module.exports = store
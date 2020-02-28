import { combineReducers } from 'redux'
import cart                from './firstReducer'
import price               from './firstReducer'

const reducer = combineReducers({ cart, price })

export default reducer

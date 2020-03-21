import { combineReducers } from 'redux'
import cart                from './cartReducer'
import price               from './cartReducer'

const reducer = combineReducers({ cart, price })

export default reducer

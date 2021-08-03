import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../Reducer'

export default store = createStore(reducers, {}, applyMiddleware(thunk)) 

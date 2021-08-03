import { combineReducers } from 'redux'

import TestReducer from './TestReducer'


const appReducer = combineReducers({
    TestReducer
})

export default rootReducer = (state, action) => {
    return appReducer(state, action)
}
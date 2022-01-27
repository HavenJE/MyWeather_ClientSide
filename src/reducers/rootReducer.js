import { combineReducers } from 'redux'
import { locationsReducer } from './locationsReducer'
import { usersReducer } from './usersReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    locations: locationsReducer
})

// combineReducer is going to create these keys; users and locations, inside of our store that is going to return the values of the state set by these two reducers (usersReducer, locationsReducer) individually. This will be passed by rootReducer to createStore at index.js 
// We should see that when we inspect our page - under redux - state tab 
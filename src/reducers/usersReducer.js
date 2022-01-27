// reducer is going to take 2 arguments; 1. state 2. action (action is going to determine what type of new state I produce)

export const usersReducer = (user = null, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return user
        case 'LOGIN_USER':
            return {...action.user}
        case 'LOGOUT_USER':
            localStorage.removeItem('jwt')
            return null
        default:
            return user // this return the initial state of user which is = null 
    }

}

// since now we have 2 reducers, we need to bundle them and pass them to createStore 
// in line 3, user = null - represents the 1st parameter which is:
// 1. in the case of multiple reducers is => the state property 
// 2. in the case of having one reducer only => this is the state.object - which is also the redux store 
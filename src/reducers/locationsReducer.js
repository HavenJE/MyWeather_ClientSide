// reducer is going to take 2 arguments; 1. state 2. action (action is going to determine what type of new state I produce)

export const locationsReducer = (locations = [], action) => {
    switch (action.type) {
        case 'FETCH_LOCATIONS': // this is just to log the action we have done 
            console.log('FETCH_LOCATIONS', action.payload)
            return locations
        case 'FETCH_LOCATION': // to fetch an individual location  
            return locations
        case 'ADD_LOCATIONS':
            console.log('ADD_LOCATIONS', action.payload)
            return [...action.payload] // to add multiple locations at once 
        case 'ADD_LOCATION':
            return [...locations, action.payload] // to add a single one 
        case 'DELETE_LOCATION':
            return locations.filter(location => location.id !== action.payload)
        case 'EDIT_LOCATION':
            const locations = locations.map(location => location.id !== action.payload.id ? location : action.payload)
            return locations
        default:
            return locations;
    }
}

// export const locationsReducer = (locations = [], action) => {
//     switch (action.type) {
//         case 'FETCH_LOCATIONS_REQUEST': // For fetching all locations requests from the server 
//             return locations 
//         case 'ADD_LOCATION_REQUEST':
//             return locations 
//        case 'DELETE_LOCATION_REQUEST':
//             return locations 
//         case 'ADD_LOCATIONS':
//             return [...action.locations] // [ {id: 1, title: "title", content: "content" etc}, {}, {}, {}] => this is just an array of locations object 
//         // case 'ADD_LOCATION':
//         //     return [...locations, action.locations] 
//         case 'DELETE_LOCATION':
//             return locations.filter(location => location.id !== action.payload) 
//         case 'EDIT_LOCATION':
//             const locations = locations.map(location => location.id !== action.payload.id ? location : action.payload)
//             return locations 
//         default:
//             return locations;
//     }
// }


// export const locationsReducer = (state = [ ], action) => {
//     switch (action.type) {
//         case 'FETCH_LOCATIONS': // this is just to log the action we have done 
//             // console.log('FETCH_LOCATIONS', action.payload)
//             return action.payload 
//         case 'ADD_LOCATIONS':
//             return   [...action.payload] 
//         case 'ADD_LOCATION':
//             return   [...state, action.payload] 
//         case 'DELETE_LOCATION':
//             return state.filter(location => location.id !== action.payload) 
//         case 'EDIT_LOCATION':
//             const locations = state.map(location => location.id !== action.payload.id ? location : action.payload)
//             return locations 
//         default:
//             return state;
//     }
// } 
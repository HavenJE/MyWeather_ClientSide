
export default function fetchLocation(locationId) {
    return (dispatch) => {
        dispatch({type: 'FETCH_LOCATION'}); // this just acknowledges that we are fetching the locations 

        fetch(`http://127.0.0.1:3000/locations/${locationId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // acknowledging the server that we are sending json data 
                Accept: 'application/json', // acknowledging the server that we are accepting json data 
                Authorization: `Bearer ${localStorage.getItem('jwt')}` // passing the token 
            }
        })
            .then(resp => resp.json())
            .then(location => dispatch({type: 'ADD_LOCATION', location})) // {type: ' ', locations: { }}:
    }
}


// export const fetchLocation = () => {
//     return (dispatch) => {
//         fetch('http://127.0.0.1:3000/locations')
//             .then(resp => resp.json())
//             .then(locations => dispatch({ type: 'FETCH_LOCATIONS', payload: locations }))
//     }
// }

// export const addLocation = (location) => {
//     return (dispatch) => {
//         fetch('http://127.0.0.1:3000/locations', {
//             method: 'POST',
//             body: JSON.stringify(location),
//             headers: { 'Content-Type': 'application/json' } // 1.here, we posting data object to db 
//         })
//             .then(resp => resp.json())
//             .then(location => dispatch({ type: 'ADD_LOCATIONS', payload: location })) //2. we dispatching that one location to the reducer so that it updates the store's stat. 
//     }
// }

// // Action Creator: 1. Dispatch an action to the store to render an updated location object to the user 2. Make a fetch request to persist the update to the Rails API.

// export const editLocation = (location) => {
//     return dispatch => {
//         dispatch({ type: 'EDIT_LOCATION', payload: location })
//         fetch(`http://127.0.0.1:3000/locations/${location.id}`, {
//             method: 'PATCH',
//             body: JSON.stringify(location),
//             headers: { 'Content-Type': 'application/json' }
//         })
//     }
// }

// export const deleteLocation = (location) => {
//     return (dispatch) => {
//         dispatch({ type: 'DELETE_LOCATION', payload: location.id })
//         fetch(`http://127.0.0.1:3000/locations/${location.id}`, {
//             method: 'DELETE',
//             body: JSON.stringify(location),
//             headers: { 'Content-Type': 'application/json' }
//         })
//     }
// }




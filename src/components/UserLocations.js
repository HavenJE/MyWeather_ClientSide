
// import { useEffect } from 'react'
import { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import fetchLocations from '../actions/fetchLocations'
import { Link } from 'react-router-dom';


const UserLocations = () => {

    const [locations, setLocations] = useState([])
    // const locations = useSelector(state => state.locations)
    // const dispatch = useDispatch()

    useEffect(() => {

        fetch('http://127.0.0.1:3000/locations', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(resp => resp.json())
            
            .then(locations => {
                setLocations(locations)
                console.log('locations', locations)
            })

    }, [])

    const renderLocations = () => locations.map(location => (
        <Link key={uuid()} to={`/locations/${location.id}`} >
            <ol>
                <li > Location: {location.title} </li>
                <p> Description: {location.content} </p>
                <p> Weather Category: {location.category} </p>
            </ol>

        </Link>
    ))

    return (
        <div>
            <h5> User Locations </h5>
            {renderLocations()}
        </div>
    )
}

export default UserLocations;

// now we delegating the fetch to the actionCreator so that the middleware handle our requests 


// const UserLocations = () => {

//     const [locations, setLocations] = useState([])
//     // const locations = useSelector(state => state.locations)
//     // const dispatch = useDispatch()

//     useEffect(() => {

//         fetch('http://127.0.0.1:3000/locations', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//                 Authorization: `Bearer ${localStorage.getItem('jwt')}`
//             }
//         })
//             .then(resp => resp.json())
//             .then(locations => {
//                 setLocations(locations)
//             })

//     }, [])

//     const renderLocations = () => locations.map(location => (
//         <Link key={uuid()} to={`/locations/${location.id}`} >
//             <ol>
//                 <li > Location: {location.title} </li>
//                 <p> Description: {location.content} </p>
//                 <p> Weather Category: {location.category} </p>
//             </ol>

//         </Link>
//     ))

//     return (
//         <div>
//             <h5> User Locations </h5>
//             {renderLocations()}
//         </div>
//     )
// }

// export default UserLocations;


// const UserLocations = () => {   

//     // const [locations, setLocations] = useState([])

//     // useSelector is a hook provided by react-redux library that accepts a function as a parameter of the state 
//     // locations variable is the value of our locations property in our redux store 
//     const locations = useSelector(state => state.locations)
//     const dispatch = useDispatch()

//     // now we delegating the fetch to the actionCreator so that the middleware handle our requests 

//     useEffect(() => {
//         dispatch(fetchLocations()) // we passing fetchLocations actionCreator here 
//     }, [])

//     const renderLocations = () => locations.map(location => (
//         <Link key={uuid()} to={`/locations/${location.id}`} >
//             <ol>
//                 <li > Location: {location.title} </li>
//                 <p> Description: {location.content} </p>
//                 <p> Weather Category: {location.category} </p>
//             </ol>

//         </Link>
//     ))

//     return (
//         <div>
//             <h5> User Locations </h5>
//             {renderLocations()}
//         </div>
//     )
// }

// export default UserLocations;

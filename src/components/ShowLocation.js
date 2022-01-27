import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import fetchLocation from '../actions/fetchLocation';

export const ShowLocation = () => {
    // lines 8,9,10 we are de-structuring 
    const {locationId}  = useParams()
    const locations = useSelector(state => state.locations)
    const [location, setLocation] = useState(null)
    const dispatch = useDispatch()

    console.log(locationId)

    useEffect(() => {
        let selectedLocation;
        // if there is a location, then assign that to selectedLocation using the location.id which is an integer that we are parsing in (parseInt) as an integer rather than a string. 
        if (locations.length > 0) selectedLocation = locations.find(location=> location.id === parseInt(locationId))
        else dispatch(fetchLocation(locationId))
        if (selectedLocation) setLocation(selectedLocation) // if you have the selectedLocation or its value => then set the location to the selectedLocation, if no value or no selectedLocation, then location is null. 
    })

    return (
        <div>
            <h5> {location?.title || "fetching location Information"} </h5> 
            <li> {location?.content} </li>
            <li> {location?.category} </li>
        </div>
    )
}

// useParams provide us with an object 
// In line 22,23,24 we doing optional chaining on the left of the || (OR operator) - we checking whether location? is null or defined - if its truthy => returns title, content, category - if its falsy => return "fetching location Information"
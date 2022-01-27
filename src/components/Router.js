import React from 'react'
import { Routes, Route } from 'react-router-dom';
// import './App.css'

import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import { ShowLocation } from './ShowLocation'
import UserLocations from './UserLocations'

// import LocationCard from './LocationCard'
// Home renders Google login page 
// import { LoginButton } from './LoginButton';
// import LocationsContainer from './LocationsContainer'
// import EditLocationForm from './EditLocationForm';
// import LocationCard from './LocationCard';

// <Route exact path='/' element={<LoginButton />} />

const Router = () => {

    return (
        <div>
            <Routes>
                <Route exact path='/Login' element={<Login />} />
                <Route path='/Signup' element={<Signup />} />

                <Route path='/about' element={<About />} />
                <Route path='/UserLocations' element={<UserLocations />} />
                <Route path='/locations/:locationId' element={<ShowLocation />} />
            </Routes>

        </div>
    )
}

export default Router;

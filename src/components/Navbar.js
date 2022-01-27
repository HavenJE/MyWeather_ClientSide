import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="black ">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">My Weather App</a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        
                        <li> <Link to="/about"> About </Link> </li>
                        <li> <Link to="/UserLocations"> Your Locations </Link> </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

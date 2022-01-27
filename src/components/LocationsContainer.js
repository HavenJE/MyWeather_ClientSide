// This container is going to house many; data + methods related to locations domain e.g. locations form ..etc - this will be mounted in App.js container 

// we need to connect react component to redux action - use connect() method 

// remember, connect() method automatically expect mapStateToProps as a 1st argument, if you don't use, you need to put placeholder null, then use short syntax for mapDispatchToProps and put fetchLocation to make fetchLocation available to LocationsContainer as a prop. 

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLocation } from '../actions/locationsActions'
import LocationsForm from './LocationsForm'

class LocationsContainer extends Component {

    componentDidMount(){
        this.props.fetchLocation() // inspect the console, you should see data returning from rails db
    }

    render() {
        return (
            <div>
                <h3> Locations Container </h3>

                <LocationsForm />
                {/* <LocationsList />  */}
                
            </div>
        )
    }
}

export default connect(null, { fetchLocation })(LocationsContainer); 

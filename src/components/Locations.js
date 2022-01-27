
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchLocation } from '../actions/locationsActions';
import LocationsForm from './LocationsForm';
import EditLocationForm from './EditLocationForm';
import LocationsList from './LocationsList';
// import Home from './Home';


class Locations extends Component {

    state = { locationId: false }

    componentDidMount() {
        this.props.fetchLocation()
    }

    // The handleEdit() method needs to be passed down from the Locations container as a prop to the LocationCard so that it can be called by the onClick when we want to edit. 

    handleEdit = (location) => {
        this.setState({
            locationId: location.id
        })
    }

    // This will set the locationId property back to false after the edit has been completed in order to render a regular form.

    resetLocationId = () => {
        this.setState({ locationId: false })
    }

    render() {
        return (
            <div>
                <h3>Locations Component </h3>
                {this.state.locationId ?
                    <EditLocationForm
                        locationId={this.state.locationId}
                        resetLocationId={this.resetLocationId}
                    /> :
                    <LocationsForm />
                }
                <LocationsList handleEdit={this.handleEdit}/>
            </div>
        )
    }
}

export default connect(null, { fetchLocation })(Locations);
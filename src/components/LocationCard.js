// This component is responsible for rendering individual location object data. 

import React from 'react';
import { connect } from 'react-redux'

import { deleteLocation } from '../actions/locationsActions'


const LocationCard = ({ location, deleteLocation, handleEdit }) => {

    return (

        <ol className="collection">
            <br />
            <div className="collection-item"> <h6> <strong> Location: {location.title} </strong> </h6> </div>
            <div className="collection-item"> <strong> Content: </strong> {location.content} </div>
            <div className="collection-item"> <strong> Weather Category: </strong> {location.category} </div>
            <br />

            <button onClick={() => handleEdit(location)}> Edit Info </button>
            <br />
            <br />
            <button onClick={() => deleteLocation(location)}> Delete Info </button>
            <br />
            
        </ol>
    );
};

export default connect(null, { deleteLocation })(LocationCard);

// The handleEdit() method being called in the onClick event is being passed down from the Locations container as a prop. handleEdit() accepts location as a parameter and and sets the state property, locationId to the location’s id. This property will be used inside the Locations component render method to determine which of the two forms will render, create or edit. If there is a locationId, the edit form will be rendered else the create form.



import React from 'react';
import { connect } from 'react-redux'
import LocationCard from './LocationCard';

const LocationsList = ({ locations, handleEdit }) => {
    // console.log('locations; ', locations)
    return (
        <div >
            <h4> Locations List: </h4>

            <ul>
                {locations.length ? <h5> There is/are ({locations.length}) Locations Listed </h5> : <h5> No Locations listed yet! </h5>}
                {locations.map(location =>

                    <LocationCard
                        key={location.id}
                        location={location}
                        handleEdit={handleEdit}
                    />
                    )}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { locations: state.locations }
}

export default connect(mapStateToProps)(LocationsList);

// use mapStateToProps = to grab all the state in the store's state 
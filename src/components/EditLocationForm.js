
// EditLocationForm component will gain access to the store state through props by using mapStateToProps.

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editLocation } from '../actions/locationsActions'


class EditLocationForm extends Component {

    state = {
        id: '',
        title: '',
        content: '',
        category: ''
    }

    // we invoking findLocation method here in componentDidMount to ensure state is only set once and avoid any infinite looping.

    componentDidMount() {
        this.findLocation()
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    // part 2 - pre-fill the edit form with the selected locations data
    // findLocation method = 1. finds and returns the selected location from the array of locations in the store state. 2. sets the state to the locations data which will in turn show up in the edit form because the value of the fields is returns the state.

    findLocation = () => {
        const { locations, locationId } = this.props
        const location = locations.find(location => location.id === locationId)
        console.log('locations: ', locations)
        console.log('locationId: ', locationId)
        console.log('location: ', location)
        this.setState({
            id: location.id,
            title: location.title,
            content: location.content,
            category: location.category
        })
    }

    // When the user has submitted the updates, the onSubmit event will invoke a method called update . This method will use an action creator that both makes an async call to our rails backend and dispatches an action to the reducer.

    update = (e) => {
        e.preventDefault()
        this.props.editLocation(this.state)
        this.props.resetLocationId()
    }

    render() {

        return (
            <>
                <br />
                <h3> Edit Location Details </h3>
                <form onSubmit={this.update}>

                    <label> Title: </label>
                    <input
                        type='text'
                        value={this.state.title}
                        onChange={this.handleChange}
                        name='title' />
                    <br />
                    <br />

                    <label> Content: </label>
                    <input
                        type='text'
                        value={this.state.content}
                        onChange={this.handleChange}
                        name='content' />
                    <br />
                    <br />

                    <label> Category: </label>
                    <input
                        type='text'
                        value={this.state.category}
                        onChange={this.handleChange}
                        name='category' />
                    <br />
                    <br />

                    <input type='submit' value='Edit location' />
                </form>
            </>
        )
    }
}

// EditLocationForm component will gain access to the store state through props by using mapStateToProps below.
const mapStateToProps = (state) => {
    return { locations: state.locations }
}

export default connect(mapStateToProps, { editLocation })(EditLocationForm);
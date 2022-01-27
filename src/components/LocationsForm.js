// Forms are going to have a local state (component state in react is isolated and local to that state only), so no need to initialize the state in our redux store (which is the global state). 

// Redux store is global state 

// The LocationsForm is a simple React form that allows users to create new locations objects. 
// This component is connected to the Redux store and utilizes the addLocation action that is made available as a prop through mapDispatchToProps. 

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addLocation } from '../actions/locationsActions'

class LocationsForm extends Component {

    state = {
        title: '',
        content: '',
        category: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addLocation(this.state) // state object {title: , content, etc}
        this.resetForm()
    }

    resetForm = () => {
        this.setState({
            title: '',
            content: '',
            category: ''
        })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>

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

                        onChange={this.handleChange} name='category' />
                    <br />
                    <br />

                    <input type='submit' value='Add location' />
                </form>
            </>
        )
    }
}

export default connect(null, { addLocation })(LocationsForm);

// handleChange will set the state 

// handleSubmit will need to call an action in LocationsActions, the addLocation which has been made available as a prop through mapDispatchToProps. The addLocation is going to dispatch that new object to our reducer so we can update our store's state, and in the same time, our action is going to a post fetch to our API so that we can persist it to our database. 
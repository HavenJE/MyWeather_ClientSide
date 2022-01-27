import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class LocationDetails extends Component {

    constructor(props) {

        super(props);
        this.state = {
            details: ''
        }
    }

    // componentWillMount() {
    //     this.getLocationId();
    // }

    getLocationId() {
        const locationId = this.props.match.params.id;
        fetch(`http://127.0.0.1:3000/locations/${locationId}`)
            .then(resp => {
                this.setState({ locations: resp.locations }, () => {
                    console.log(this.state)
                })  
            })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <br/> 
                <Link className="btn-white" to="/locations"> Back to Main List </Link>
                <h4>Location Details:</h4>
            </div>
        )
    }
}





















// import React, { Component } from 'react'

// export default class Location extends Component {

//     componentDidMount(){
//         console.log(this.props)
//         // const Location_id = this.props.match.params[id];     
//     }

//     render() {
//         return (
//             <div>
//                 <h4> Route params </h4>
//             </div>
//         )
//     }
// }

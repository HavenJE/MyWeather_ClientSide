import React from 'react'

// Google login 
// import GoogleLogin from 'react-google-login'

import { useAuth0 } from '@auth0/auth0-react'
// import SignupForm from './SignupForm'


export default function Home() {

    const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    // responseGoogle = (response) => {
    //     console.log(response);
    //     console.log(response.profileObj);
    // }


    return (
        <div>
            <h5> Home Page </h5>

            <ul>
                <li>
                    <button onClick={loginWithPopup}> Login with Auth0 </button>
                </li>
                <br />

                {/* <li>
                    <button onClick={loginWithRedirect}> Login with Redirect </button>
                </li>
                <br/> */}

                <li>
                    <button onClick={logout}> Login out </button>
                </li>
                <br />

            </ul>

            <h5> User is {isAuthenticated ? "logged in" : "Not logged in"}</h5>

            {isAuthenticated && (
                <pre style={{ textAlign: 'start' }}>
                    {JSON.stringify(user, null, 2)}
                </pre>
            )}
            
            


            {/* <div>
                    <GoogleLogin
                        clientId="154189348486-jdlk1goenbhr16pft3ifrmjtrqtvmojq.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                </div> */}
        </div>
    )

}


// <button > Login With Google </button>
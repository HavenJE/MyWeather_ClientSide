
// import LocationsContainer from './LocationsContainer'; no longer need this after setting routing 
// import './App.css';
// import { useState } from 'react';
import React from 'react'
import Navbar from './Navbar';
import Router from './Router';

// Auth0 login 
// import { LoginButton } from './LoginButton';

// Google login 
// import GoogleLogin from 'react-google-login'

const App = () => {

  return (
    <div>
      <Navbar />

      <div className="container">
        <Router />
      </div>

    </div>

  )
}

export default App;
// no longer need <LocationsContainer/> after setting routing


// Aysan App component 

// import { useState, useEffect } from 'react'
// import Navbar from './Navbar'
// import Router from './Router'
// import LoggedIn from './LoggedIn'
// import LoggedOut from './LoggedOut'

// const App = () => {

//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);

//   useEffect(() => {
//     fetch("/auth")
//       .then((res) => {
//         if (res.ok) {
//           res.json().then((user) => {
//             setCurrentUser(user);
//             setIsAuthenticated(true);
//           });
//         }
//       });
//   }, []);

//   if (!isAuthenticated) {
//     return <div> </div>;
//   }

//   return (
//     <div>
      

//       <div className="container">
//         <Router >
//           {false? <loggedIn/> : <LoggedOut />}
//         </Router>
//       </div>

//     </div>

//   )
// }

// export default App;
// import React, { useState } from 'react'
// import { setCurrentUser } from ''

//     const [formData, setFormData] = useState({
//         username: " ",
//         email: " ",
//         password: " "
//     });


//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const userCredentials = { ...formData };

//         fetch(" ", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(userCredentials),
//         }).then((res) => {
//             if (res.ok) {
//                 res.json().then((user) => {
//                     setCurrentUser(user);
//                 });
//             } else {
//                 res.json().then((errors) => {
//                     console.error(errors);
//                 });
//             }
//         });
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username"> Username: </label>
//                 <input
//                     id="username-signup-input"
//                     type="text"
//                     name="username"
//                     placeholder="username"
//                     value={formData.username}
//                     onChange={handleChange}

//                 />

//                 <label htmlFor="email"> Email: </label>
//                 <input
//                     id="email-signup-input"
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}

//                 />

//                 <label htmlFor="password"> Password: </label>
//                 <input
//                     id="password-signup-input"
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleChange}

//                 />

//                 <button type="submit"> Sign Up </button>
//             </form>
//         </div>
//     )
// }
// export default SignupForm;
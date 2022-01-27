
import { useNavigate } from 'react-router'
// import { useDispatch } from 'react-redux'
// import loginUser from '../actions/loginUser'


export default function Login() {

    const navigate = useNavigate()
    // const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: e.target.email.value, // e.target comes from the <form /> .email.value comes from the id="email"
                    password: e.target.password.value
                }
            })
        })
            .then(r => r.json())
            .then(r => {
                console.log(r)
                localStorage.setItem('user', JSON.stringify(r.user))
                localStorage.setItem('jwt', r.jwt)

                navigate('/UserLocations')
            })
    }

    return (
        <>
            <h3> Login Page </h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email"> Email </label>
                <input
                    id="email-signup-input"
                    type="email"
                    name="email"
                    placeholder="email@email.com"
                // onChange={handleChange}

                />

                <label htmlFor="password"> Password </label>
                <input
                    id="password-signup-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                // onChange={handleChange}

                />

                <button type="submit"> Login </button>
            </form>

        </>
    )
}

// in line 15, 
// - e.target = reference the form 
// - e.target.email = reference the input field in line 27 with the id="password-signup-input"
// the same goes with the password 





// const user = {
//     email: e.target.email.value, 
//     password: e.target.password.value
// }

// dispatch(loginUser(user))
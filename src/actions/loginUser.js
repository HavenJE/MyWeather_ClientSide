import React from 'react'

export default function loginUser({email, password}) {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_REQUEST'
        });

        fetch('http://127.0.0.1:3000/login', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                Accept: 'application/json'
            }, 
            body: JSON.stringify({
                user: {
                    email, // since the key & its variable have the same name, this can be written like this
                    password // password: currentUser.password
                }
            })  
        })
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                localStorage.setItem('jwt', resp.jwt)
                dispatch({
                    type: 'LOGIN_USER',
                    user: resp.user
                })
            })
    }; 
}

 import React, { useState } from 'react';
import { registerUser } from '../ajax-requests';
import "./style.css"
function Register({ setToken }){
    const[username, setUsername]= useState('');
    const[password, setPassword]= useState('');

    


    async function handleSubmit(event){
        event.preventDefault();
        const user = {username, password};

      const results = await registerUser(user);
      if (results.success) { 
        setToken(results.data.token);
        window.localStorage.setItem("token", results.data.token)
      }
    }

    return (
    <form onSubmit ={handleSubmit}>
        <input 
        className ="userName"
        type='text'
        placeholder ='Enter Username'
        onChange={(event) => setUsername(event.target.value)}
        />
        <input 
        type='password'
        placeholder='Enter Password'
        onChange={(event) => setPassword(event.target.value )}
        />
        <button className='submitbutton' type='submit'> Submit </button>
    </form>
    )
}

export default Register;
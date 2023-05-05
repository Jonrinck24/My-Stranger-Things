import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css"

function Nav({ setToken, setIsLoggedIn, isLoggedIn }) {

  function logout() {
    setToken('');
    setIsLoggedIn(false);
    window.localStorage.removeItem("token");
  }

  return (
    <nav>
      <h1 className = "title">Stranger's Things</h1>
      {isLoggedIn ? (
        <>
          <button className= "creatpostBTN">
            <Link to="/create-post">Create Post</Link>
          </button>
          <button>
            <Link to="/">See all posts</Link>
          </button>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <>
          <button
          className='loginBtn'>
            <Link to="/login">Login</Link>
          </button>
          <button 
          className ="registerBtn">
            <Link to="/register">Register</Link>
          </button>
        </>
      )}
    </nav>
  );
}

export default Nav;
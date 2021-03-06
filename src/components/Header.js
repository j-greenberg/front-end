import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom'; 

import '../styles/Header.scss'; 

import { AppContext } from '../App'; 


function Header(props){

    const user = useContext(AppContext); 
    console.log('This is the user: ', user); 

    return(
        <header className="top">
            <nav>
                <h1 className="title">
                    <Link to="/">PostHere for Reddit</Link>
                </h1>
                <div>
                    { user ? (
                        <>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/create-post">Create Post</Link>
                        <Link to="/profile">Profile</Link>
                        <Link to="/logout">Logout</Link>
                        </>
                    ) : ( 
                        <> 
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    ); 
}; 

export default Header; 
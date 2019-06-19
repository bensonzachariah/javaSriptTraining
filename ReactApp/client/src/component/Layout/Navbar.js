import React from 'react'

import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-25">
               
                <Link className="navbar-brand" to="/">React</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                       
                            <li className="nav-item">
                                <Link className="nav-link" to="/Welcome">Home</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                       
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                       
                            <li className="nav-item">
                                <Link className="nav-link" to="/Register">Register</Link>
                            </li>
                        </ul>
                    </div>

                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                       
                            <li className="nav-item">
                                <Link className="nav-link" to="/Profile">Profile</Link>
                            </li>
                        </ul>
                    </div> 
             </nav>
       </div>
    )
}
export default Navbar
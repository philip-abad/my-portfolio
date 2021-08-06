/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

//React Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light back-color">
            <div className="container">
                <a className="navbar-brand "><b className="logo">My Portfolio</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} className="hamburger"/>
                </button>

                
            
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <a href="#" className="nav-link">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                    <a href="#"  className="nav-link">About Me <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                    <a href="#"  className="nav-link">My Journey <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                    <a href="#"  className="nav-link">Portfolio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active">
                    <a href="#" className="nav-link">Contact <span className="sr-only">(current)</span></a>
                    </li>
                
                </ul>         
                </div>     
            </div>   
      </nav>
    )
}

export default Navbar

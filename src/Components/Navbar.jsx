import React from 'react';
import Nav_logo from '../assets/logo.jpg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg Nav_main bg-body-tertiary">
            <div className="container-fluid">
                {/* Logo
                <a className="navbar-brand" href="#">
                    <img src={Nav_logo} alt="Brand Logo" width="220" height="50" className="d-inline-block align-top" />
                </a> */}
                <div className="main_heading">
                    <h2>HH HERBAL'S</h2>
                </div>
                {/* Toggler button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars navbar-toggler-icon"></i>
                </button>
                {/* Navbar items */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutus">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* Search form */}
                <form className="d-none d-lg-flex mx-lg-3">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                {/* Search icon for smaller screens */}
                <div className="icons  ml-auto">
                    <div className="d-lg-none d-flex">
                        <i className="fa-solid fa-magnifying-glass"></i>

                        <img src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
                            width="26"
                            height="26"
                            className="img-small mx-lg-3"
                        />

                    </div>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;

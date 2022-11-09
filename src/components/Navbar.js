import React from 'react'
import '../styles/Navbar.css'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navContainer'>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container d-flex">
                    <div className="navbar-brand text-white d-flex">
                        <img src={logo} className='logo'></img>
                        <h3 className='title'>Katalisia</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/'>
                                    <a className="nav-link text-white" aria-current="page" href="#">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Feature</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" aria-current="page" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/signup'>
                                    <button type="button" class="btn-nav">SignUp</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                            <Link to='/login'>
                                <button type="button" class="btn-nav">Login</button>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
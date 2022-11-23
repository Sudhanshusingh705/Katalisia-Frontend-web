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
                        <img src={logo} alt='logo' />
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
                                    <Link className="nav-link text-white" aria-current="page" to="#">Home</Link>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="#">Feature</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" aria-current="page" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="#">Contact</Link>
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
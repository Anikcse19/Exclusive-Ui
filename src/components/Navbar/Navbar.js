import React from 'react';
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar nav-bg">
            <div className="container-fluid">
                <img style={{ marginLeft: '136px', marginTop: '19px' }} src={logo} alt="" />
                <ul className="d-flex">
                    <div style={{ fontFamily: 'Roboto', fontWeight: '500' }}>
                        <a className='text-decoration-none' style={{ marginRight: '56px', color: '#14BBEA' }} href="">Home</a>
                        <a className='text-decoration-none' style={{ marginRight: '56px', color: 'white', }}>About Us</a>
                        <a className='text-decoration-none' style={{ marginRight: '56px', color: 'white' }}>Services</a>
                        <a className='text-decoration-none' style={{ marginRight: '56px', color: 'white' }}>Programes</a>
                        <a href="" className='btn' style={{ marginRight: '117px', color: 'white', background: 'linear-gradient(90deg, #14BBEA 0%, #009DC9 100%)', borderRadius: '8px', padding: '14px 24px' }}>Contact Us</a>
                    </div>

                </ul>
            </div>
        </nav >
    );
};

export default Navbar;
import React from 'react';
import logo from '../images/logo.png';
export default function Navbar() {

    return (
        <nav className='Container'>
            <img className='Rlogo'src={logo} alt='nothing in here'/>
            <h1 className='Title'>ReactFacts</h1>
            <h2 className='SubTitle'>React Course - Project 1</h2>
        </nav>
    )
}
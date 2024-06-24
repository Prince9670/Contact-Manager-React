import React from 'react'
import { Link } from 'react-router-dom'
import redGrapeLogo from '../assets/red-grape-logo.png'; 

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
            <div className='container-flui'> 
                <Link to='/' className='navbar-brand ml-5 flex flex-row gap-3 font-bold'><img src={redGrapeLogo} alt="Red Grape Logo" className='h-10 w-15'/>Contact List App</Link>
            </div>
        </nav >
    )
}

export default Navbar;

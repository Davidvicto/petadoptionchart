import React from 'react';
import House from './house.png'
import Dogtag from './dog-tag.png';
import Blockchain from './blockchain.png';
import './Navbar.css'

const Navbar= () => {
    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container-text'>
            <h4 className="Petly">Petly</h4>
            <p className="Find">Find a pet to adopt</p> 
            <p className="Report">Report a missing pet</p>
            </div>
            <div className='nav-container-children1'>
            <img style={{margin:'13px'}} src={House} width='24' height='24' alt='house'/>
            </div>
            <div className='nav-container-children'>
            <img src={Blockchain} width="15" alt='blockchain'/>
            <img src={Dogtag} width='15' alt='dogtag'/>    
            </div>
        
        
        </nav>
        </>
    )
}

export default Navbar;

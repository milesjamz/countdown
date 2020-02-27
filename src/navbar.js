import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <div className='nav'>
Welcome, User! || <NavLink to='/login'>LOGIN</NavLink> || 
<NavLink to='/signup'>SIGNUP</NavLink> || 
<NavLink to='/credits'>CREDITS</NavLink>|| 
<NavLink to='/clock'>ADD TIMER</NavLink>
        </div>
    )
}

export default Navbar
import React from 'react';
import { NavLink } from 'react-router-dom';
import profileactive from './profileactive.module.css'
const ProfileActiveRoute = ({ children, to, toggleNav }) => {
    return (
        
            <NavLink to={to} className={({ isActive, isPending }) => isActive ? profileactive.active : isPending ? profileactive.pending : profileactive.all} onClick={toggleNav}>
                {children}
            </NavLink>
      
    );
};

export default ProfileActiveRoute;
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileActiveRoute from '../activeroutes/ProfileActiveRoute';

const Dropdown = ({ links }) => {

    return (


        links.map(ele => <ProfileActiveRoute className='hover:bg-slate-50' to={ele.to}>{ele.content}</ProfileActiveRoute>)


    );
};

export default Dropdown;
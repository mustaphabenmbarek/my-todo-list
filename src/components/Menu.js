import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><NavLink to='/' className={({isActive}) => (isActive ? "activelink" : undefined)}>Home</NavLink></li>
                <li><NavLink to='/add' className={({isActive}) => (isActive ? "activelink" : undefined)}>Add Task</NavLink></li>
                <li><NavLink to='/list' className={({isActive}) => (isActive ? "activelink" : undefined)}>All Tasks</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;
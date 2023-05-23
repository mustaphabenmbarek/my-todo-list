import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='menu'>
            <ul>
                <li><NavLink to='/' className={({isActive}) => (isActive ? "activelink" : undefined)}>Accueil</NavLink></li>
                <li><NavLink to='/add' className={({isActive}) => (isActive ? "activelink" : undefined)}>Ajout tâche</NavLink></li>
                <li><NavLink to='/list' className={({isActive}) => (isActive ? "activelink" : undefined)}>Tâches</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;
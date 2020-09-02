import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const NavigationItems = () => {
    return (
        <ul className='header-list'>
          <NavigationItem to='/home' exact>Home</NavigationItem>
          <NavigationItem to='/about' exact>About</NavigationItem>
          <NavigationItem to='/contacts' exact>Contacts</NavigationItem>
          <NavigationItem to='/divisions' exact>Divisions</NavigationItem>
          <NavigationItem to='/admin' exact>Admin</NavigationItem>
        </ul>
    );
};

export default NavigationItems;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

const NavigationItem = props => {
    return (
        <li className="header-list-item">
            <NavLink to={props.to} exact={props.exact}>
                {props.children}
            </NavLink>
        </li>
    );
};

export default NavigationItem;
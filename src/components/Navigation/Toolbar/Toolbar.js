import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Toolbar.css';

const Toolbar = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <NavigationItems />
                </nav>
            </div>

        </header>
    );
};

export default Toolbar;
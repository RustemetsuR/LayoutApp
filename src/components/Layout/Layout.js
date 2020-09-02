import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';

const Layout = props => {
    return (
        <div className='layout'>
            <Toolbar/>
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default Layout;
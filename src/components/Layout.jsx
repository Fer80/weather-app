import React from 'react';

import '../assets/styles/layout.css';

import Sidebar from '../components/Sidebar';
import Footer from './Footer';

const Layout = props => (
    <div className="global-container">
        <Sidebar />
        <div className="main-content">
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    </div>
);

export default Layout;

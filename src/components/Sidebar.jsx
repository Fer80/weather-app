import React from 'react';

import '../assets/styles/sidebar.css';

import cloudBackground from '../assets/images/Cloud-background.png';
import shower from '../assets/images/Shower.png';

const Sidebar = () => {

    return (
        <div className="sidebar">
            <header>
                <button className="search">Search for places</button>
                <button className="my-location">
                    <span class="material-icons">my_location</span>
                </button>
            </header>
            <div className="weather-ilustration">
                <img src={cloudBackground} alt="clouds" />
                <img src={shower} alt="weather" />
            </div>
            <h1><span>15</span>℃</h1>
            <h2>Shower</h2>
            <div className="location-date">
                <p>Today • Fri, 5 Jun</p>
                <p>
                    <span className="material-icons">place</span>
                    Helsinki
                </p>
            </div>
        </div>
    );
};

export default Sidebar;

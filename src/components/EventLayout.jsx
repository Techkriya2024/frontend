import React from 'react';
import '../CSS/EventLayout.css'; // External CSS file for styles
// import samyukthaImage from './assets/samyuktha-menon.jpg'; // Adjust paths as necessary
// // import djNightImage from './assets/dj-night.jpg';
import hemaImage from '../assets/techriya_logo_mod.png';

const EventLayout = () => {
    return (
        <div className="container">
            <div className="event">
                <img src={hemaImage} alt="Samyuktha Menon" className="event-img" />
                <div className="event-info">SAMYUKTHA MENON</div>
            </div>
            <div className="event">
                <img src={hemaImage} alt="DJ Night" className="event-img" />
                <div className="event-info">DJ NIGHT</div>
            </div>
            <div className="event">
                <img src={hemaImage} alt="HemaChandra" className="event-img" />
                <div className="event-info">HEMA</div>
            </div>
        </div>
    );
};

export default EventLayout;
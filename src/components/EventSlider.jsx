import React from 'react';
import '../CSS/EventSlider.css';

const XShapeScrollingTracks = () => {
  return (
    <div className="x-container">
      {/* First diagonal track (45 degrees) */}
      <div className="track track-diagonal1">
        <div className="scroll-wrapper">
          <div className="scroll-text">
            EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS 
          </div>
          <div className="scroll-text">
            EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS 
          </div>
          <div className="scroll-text">
            EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS 
          </div>
        </div>
      </div>

      {/* Second diagonal track (-45 degrees) */}
      <div className="track track-diagonal2">
        <div className="scroll-wrapper">
          <div className="scroll-text">
            EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS 
          </div>
          <div className="scroll-text">
            EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS 
          </div>
          <div className="scroll-text">
            EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS EVENTS 
          </div>
        </div>
      </div>
    </div>
  );
};

export default XShapeScrollingTracks;
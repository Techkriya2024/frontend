import React from "react";

const Eventbar = () => {
  const events = [
    "Event 1 - October 9th",
    "Event 2 - October 10th",
    "Event 3 - October 11th",
    "Event 4 - October 12th",
    "Event 5 - October 13th",
  ];

  // Inline CSS for the container
  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#000000', // Set background to black
    color: 'white',
    height: '5rem', // Increase the height for larger text
    display: 'flex',
    alignItems: 'center',
    borderTop: '2px solid white',  // Add white line at the top
    borderBottom: '2px solid white', // Add white line at the bottom
  };

  const marqueeStyle = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-around', // Equally distribute events
    width: '100%',
    animation: 'marquee 10s linear infinite',
  };

  const eventStyle = {
    width: 'auto',
    padding: '0 1rem', // Add some padding for spacing
    height: '70px',
    display: 'inline-block',
    fontFamily: "'Josefin Sans'", // Apply Josefin Sans font family
    fontSize: '50px', // Set font size to 50px
    fontStyle: 'italic', // Make the text italic
    fontWeight: '600', // Font weight set to 600
    lineHeight: '70px', // Set line height to 70px
    letterSpacing: '0.1em',
    textAlign: 'left',
    textShadow: `
      1px 1px 0px white, 
      -1px -1px 0px white, 
      1px -1px 0px white, 
      -1px 1px 0px white`, // Simulate a white border around each character
  };

  return (
    <div className="eventbar-container">
      <div style={containerStyle}>
        <div style={marqueeStyle}>
          {events.map((event, index) => (
            <span
              key={index}
              style={{
                ...eventStyle,
                color: index % 2 === 0 ? 'white' : 'black', // Alternate between white and black
              }}
            >
              {event}
            </span>
          ))}
        </div>

        {/* Adding keyframe animation in a style tag */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Eventbar;

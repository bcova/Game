import React from 'react'

const SplashScreen = ({ onDismiss }) => {
    return (
      <div className="splash-screen">
        <h1>Welcome to the Game!</h1>
        <h2>Here are the rules:</h2>
        <ol id='rules'>
            <li className='rule'>Player one clicks on a square</li>
            <li className='rule'>Player two then tries to click on that same square</li>
            <li className='rule'>If they are successful they earn a point! </li>
            <li className='rule'>Then Player two places a square and Player one tries to click on that same square!</li>
            <li className='rule'>First to 3 wins!</li>
        </ol>
        <button id='splash-btn' onClick={onDismiss}>OK</button>
      </div>
    );
  };

export default SplashScreen
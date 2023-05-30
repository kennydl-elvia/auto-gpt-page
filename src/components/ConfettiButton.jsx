import React, { useState } from 'react';
import './ConfettiButton.css';

function ConfettiButton() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <button className='confetti-button' onClick={handleClick}>
      Click me!
      {showConfetti && (
        <div className='confetti-container'>
          <div className='confetti'></div>
          <div className='confetti'></div>
          <div className='confetti'></div>
          <div className='confetti'></div>
          <div className='confetti'></div>
          <div className='confetti'></div>
          <div className='confetti'></div>
          <div className='confetti'></div>
          <div className='confetti'></div>
          <div className='confetti'></div>
        </div>
      )}
    </button>
  );
}

export default ConfettiButton;
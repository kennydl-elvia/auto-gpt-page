import React from 'react';
import Confetti from 'react-confetti';

function ConfettiButton() {
  const [showConfetti, setShowConfetti] = React.useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 2000);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me for confetti!</button>
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
    </div>
  );
}

export default ConfettiButton;
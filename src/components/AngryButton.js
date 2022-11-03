import { useState } from 'react';

const AngryButton = () => {
  return (
    <button className="Angry Button">
      {/* When the threshold is not reached */}
      <span>Don't click me too much!</span>
      {/* When the threshold is not reached */}
      <span>Rawr!</span>
    </button>
  );
};

export default AngryButton;










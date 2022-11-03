import { useState } from 'react';

const CounterButton = () => {
  
  const [clickAmount, setClickAmount] = useState(0);
  
  return (
  
  <button className="CounterButton">
      You clicked me {clickAmount} times
    </button>
  
  );

};

export default CounterButton;



import React from 'react';

const Square = ({ value, onClick ,isWinninerSquare}) => {
  //   console.log(props);
  return (
    <button 
      type="button" 
      onClick={onClick} 
      className={`square ${isWinninerSquare? 'winning':''} ${value === 'X'?'text-green':'text-orange'}`}
      >
      {value}
    </button>
  );
};

export default Square;

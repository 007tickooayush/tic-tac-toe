import React from 'react';

const Square = ({ value, onClick ,isWinninerSquare}) => {
  //   console.log(props);
  return (
    <button type="button" className="square" onClick={onClick} style={{fontWeight:isWinninerSquare?'bold':'normal'}} >
      {value}
    </button>
  );
};

export default Square;

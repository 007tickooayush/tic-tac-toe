import React from 'react';

const History = ({ history,moveTo,currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className='history'>
      {history.map((i, move) => {
        return (
          <li key={move}>
            <button type="button" 
              className={`btn-move ${move === currentMove? 'active':''}`}
                // style={
                //     {
                //         fontWeight: move === currentMove ? 'bold':'normal' 
                //     }
                // }
                onClick={ () =>moveTo(move)}
            >
              {move === 0 ? 'Go to game start' : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
    </div>
    
  );
};

export default History;

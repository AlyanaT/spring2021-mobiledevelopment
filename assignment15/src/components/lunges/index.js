import React from 'react';

function lunge (props) {
    return(
        <div>
              <h2> Lunge Days: {props.state.lunge}</h2>
            <button onClick={() => props.dispatch({"type":"increment2"})}>Add lunge Day </button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove lunge Day</button>
        </div>
    )
}

export default lunge;
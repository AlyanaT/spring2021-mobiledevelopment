import React from 'react';

function lunge (props) {
    return(
        <div>
             <h2> Lunge Days: {props.state.lunge}</h2>
            <button onClick={() => props.dispatch({"type":"increment1"})}>Add lunge Day </button>
            <button onClick={() => props.dispatch({"type": "decrement1"})}>Remove lunge Day</button>
        </div>
    )
}

export default lunge;
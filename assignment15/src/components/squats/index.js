import React from 'react';

function squat (props) {

    return(
        <div>
            <h2> Squat Days: {props.state.squat}</h2>
            <button onClick={() => props.dispatch({"type":"increment1"})}>Add Squat Day </button>
            <button onClick={() => props.dispatch({"type": "decrement1"})}>Remove Squat Day</button>
        </div>
    )
}

export default squat;

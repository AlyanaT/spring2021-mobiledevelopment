import React from 'react';

function squat (props) {

    return(
        <div>
            <h2> Squat Days: {props.state.Squat}</h2>
            <button onClick={() => props.dispatch({"type":"increment2"})}>Add Squat Day </button>
            <button onClick={() => props.dispatch({"type": "decrement2"})}>Remove Squat Day</button>
        </div>
    )
}

export default squat;

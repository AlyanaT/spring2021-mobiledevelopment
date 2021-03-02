import React, {useState} from 'react'

function squats (){
    const [squats, setSquats] =useState(0);

    return(
        <div>
            <h2>Squat Count: {squats}</h2>
            <button onClick={() => setSquats(squats +1)}>Squat Counter</button>
            <button onClick={()=> setSquats(0)}>Reset Counter</button>
        </div>
    )
}
export default squats;

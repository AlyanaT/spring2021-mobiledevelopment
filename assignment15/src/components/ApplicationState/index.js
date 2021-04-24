let state = {
    squat: 0,
    lunge: 0
};

function reducer(state, action){
    switch (action.type){
        case 'increment1':
            return{squat: state.squat + 1, lunge: state.lunge};
        case 'increment2':
            return{squat: state.squat, lunge: state.lunge + 1};
        case 'decrement1':
            return {squat: state.squat -1, lunge: state.lunge};
        case 'decrement2':
            return {squat: state.squat, lunge: state.lunge -1};
        default:
            throw new Error();
    }
}
 export {state, reducer};
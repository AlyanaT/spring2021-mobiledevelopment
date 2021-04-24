import React, { useReducer } from 'react';
import {state,reducer} from './components/ApplicationState';
import Lunge from './components/lunge';
import Squat from './components/squat'

function App() {

  const [currentState, dispatch] = useReducer(reducer,state);
  
  return (
    <div className= "App">
      <header className="App-header">
        <Lunge state= {currentState} dispatch={dispatch}/>
        <Squat state={currentState} dispatch={dispatch}/>
      </header>
    </div>
  );
}


export default App;
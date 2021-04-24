import React, { useReducer } from 'react';
import './App.css'
import {state, reducer} from './components/ApplicationState'
import Lunge from './components/lunges';
import Squat from './components/squats'

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
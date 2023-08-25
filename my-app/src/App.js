import './App.css';
import React from 'react';
import Final0 from './1-useState/final/1-useState-basic';
import Final2 from './1-useState/final/2-useState-advanced';
import Final3 from './1-useState/final/3-useState-example-1';
import Final4 from './1-useState/final/4-useState-example-2';
import Final5 from './2-useEffect/final/1-useEffect-basic';
import FinalAdvance from './2-useEffect/final/2-useEffect-advanced';
import Finalexample1 from './2-useEffect/final/3-useEffect-example-1';
import FetchDataFromAPI from './2-useEffect/final/DataFetching';
import ExampleComponent from './2-useEffect/final/ExampleComponent';
import CounterFinal from './1-useState/final/counter-example';
import InputExample from './1-useState/final/InputExample';
import ComplexState from './1-useState/final/ComplexState';

import ConditionalRendering from './1-useState/final/ConditionalRendering';
import ComplexForm from './1-useState/final/ComplexForm';
import CleanupEffect from './CleanupEffect/final/CleanupEffect'

function App() {
  return (
    <div className="App">
      <h1> I am coming from APP</h1>
     <Final0/>
     <Final2/>
     <br/>
     <br/>
     <Final3/>
     <br/>
     <br/>
     <br/>
     <Final4/>
     <br/>
     <br/>
     <Final5/>
     <br/>
     <br/>
     <FinalAdvance/>
     <br/>
    <Finalexample1/>
    <br/>
    <br/>
    <FetchDataFromAPI/>
    <br/>
    <br/>
    <ExampleComponent/>

    <br/>
    <CounterFinal/>

    <br/>
    <InputExample/>
    <br/>
    <ComplexState/>
    <br/>
    <ConditionalRendering/>
    <br/>
    <br/>
    <ComplexForm/>
    <br/>
    <br/>
    <CleanupEffect/>
    </div>
    
  );
}

export default App;

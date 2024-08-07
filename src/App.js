import logo from './logo.svg';
import './App.css';
import React from'react';
import StateHook from './hooks/StateHook';
import EffectHook from './hooks/EffectHook';
import MemoHook from './hooks/MemoHook';

function App() {
  
  return (
    <div className="App">
      <h1>The following web show varies react hooks</h1>
      <StateHook />
      <EffectHook />
      <MemoHook />


    </div>
  );
}

export default App;

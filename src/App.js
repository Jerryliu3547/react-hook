import logo from './logo.svg';
import './App.css';
import React from'react';
import StateHook from './hooks/StateHook';
import EffectHook from './hooks/EffectHook';
import MemoHook from './hooks/MemoHook';
import RefHook from './hooks/RefHook';
import ContextHook from './hooks/ContextHook/ContextHook';

function App() {
  
  return (
    <div className="App">
      <h1>The following web show varies react hooks</h1>
      <StateHook />
      <EffectHook />
      <MemoHook />
      <RefHook />
      <ContextHook />

    </div>
  );
}

export default App;

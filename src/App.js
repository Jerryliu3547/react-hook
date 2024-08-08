import './App.css';
import React from'react';
import StateHook from './hooks/StateHook';
import EffectHook from './hooks/EffectHook';
import MemoHook from './hooks/MemoHook';
import RefHook from './hooks/RefHook';
import ContextHook from './hooks/ContextHook/ContextHook';
import ReducerHook from './hooks/ReducerHook';
import ReducerHookComplex from './hooks/ReducerHookComplex';

function App() {
  
  return (
    <div className="App">
      <h1>The following web show varies react hooks</h1>
      <StateHook />
      <EffectHook />
      <MemoHook />
      <RefHook />
      <ContextHook />
      <ReducerHook />
      <ReducerHookComplex />

    </div>
  );
}

export default App;

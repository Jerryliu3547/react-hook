import React from 'react'
import { useState, useReducer } from'react'

//better approach for coding for diffenrent types of actions
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

//action is the function that pass into the dispatch
function reducer(state, action) {
  switch(action.type){
    case ACTIONS.INCREMENT:
      return {count: state.count + 1}
    case ACTIONS.DECREMENT:
      return {count: state.count - 1}
    default:
      return state; // Return the original state if an unknown action type is passed in.  //this is a good practice to prevent bugs.  //if you don't have default, then it will throw an error when the action type is not recognized.  //it's better to have a default action type that returns the original state.  //for example, if you want to reset the state, you can add a case 'reset': return {count: 0} to the reducer function.  //but, in this case, the state is a simple number, so resetting it to 0 won't make much sense.  //it's better to have a separate state management system like Redux or MobX.  //but, this is a simple example.  //you can add as
  }

}

const ReducerHook = () => {
  //state is the current state {count: 0  }
  //if it is a single number, that state need to be changed to count
  const [state, dispatch] = useReducer(reducer, {count: 0 })

  
  function increment () {
    dispatch({type: ACTIONS.INCREMENT  })
  }
  function decrement () {
    dispatch({type: ACTIONS.DECREMENT })
  }


  return (
    <div>
        <br/>
        <hr/>
        <h2>Using Reducer Hook</h2>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>

  
    </div>
  )
}

export default ReducerHook
import React, { useState, useReducer } from 'react';

// Define action types as constants
const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
  DELETE_TODO: 'DELETE_TODO'
};

// Function to create a new todo item
function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    complete: false
  };
}

// Reducer function to handle different action types
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo
      );
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

const ReducerHook = () => {
  // Use useReducer hook for managing todos state
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  // Handle form submission to add a new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName('');
  };

  return (
    <div>
      <br />
      <hr />
      <h2>Using Reducer Hook Complex Version</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Add Todo'
        />
      </form>
      {todos.map(todo => (
        <div key={todo.id}>
          <span style={{ color: todo.complete ? 'red' : 'green' }}>{todo.name}</span>
          <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
            Toggle
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReducerHook;

import React from 'react';
import './App.css';
import Weather from './Weather';
import News from './News';
import TodoList from './TodoList';


function App() {
  return (
    <div className="App">
      <Weather />
      <News />
      <TodoList />
    </div>
  );
}

export default App;

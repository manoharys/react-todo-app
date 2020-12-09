import React, { useState, useEffect } from 'react';
import './App.css';
import Forms from './components/Forms';
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        TODO-APP {inputText}
      </header>
      <Forms inputText={inputText} setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import Forms from "./components/Forms";
import TodoList from "./components/TodoList";

function App() {
  //For input texts
  const [inputText, setInputText] = useState("");

  //For todos to render on UI
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">TODO-APP</header>
      <Forms
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

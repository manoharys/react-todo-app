import React, { useState, useEffect } from "react";
import "./App.css";
import Forms from "./components/Forms";
import TodoList from "./components/TodoList";

function App() {
  //For input texts
  const [inputText, setInputText] = useState("");

  //For todos to render on UI
  const [todos, setTodos] = useState([]);

  //For filtering todos on UI
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
 
  //useEffect for filterHandler
  useEffect(() => {
    filterHandler();
   
  }, [todos, status]);

  //filterHandler
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">TODO-APP</header>
      <Forms
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
       
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;

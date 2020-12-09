import React from "react";

const Forms = ({inputText, setInputText}) => {
  
 const inputHandler =(e)=>{
    setInputText(e.target.value);
 }

 const buttonHandler = (e)=>{
     e.preventDefault();
     setInputText("");
 }

  return (
    <form>
      <input type="text" className="todo-input" onChange={inputHandler} value={inputText}/>
      <button onClick={buttonHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Forms;

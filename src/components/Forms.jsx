import React from "react";

const Forms = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000) + 1,
      },
    ]);
    //clearing the inputField when the is button clicked
    setInputText("");
  };

  //selectHandler

  const selectHandler = (e)=>{
      //console.log(e.target.value)
      setStatus(e.target.value)     
}

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputHandler}
        value={inputText}
      />
      <button onClick={buttonHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onClick={selectHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Forms;

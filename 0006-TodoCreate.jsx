import React, { useState } from "react";

function TodoCreate({onCreate}) {
  const [todotitle, setTodoTitle] = useState("");

  const [tododescription, setTodoDescription] = useState("");

  const handleTitle = (e) => {
    setTodoTitle(e.target.value);
    // console.log(todotitle)
  };

  const handleDescription = (e) => {
    setTodoDescription(e.target.value);
    // console.log(tododescription)
  };

  const handleTodoInfo = (e) => {
    e.preventDefault() 
    onCreate(todotitle, tododescription)
    setTodoTitle("")
    setTodoDescription("")
  }

  return (
    <div className="todo-div">
      <h2 className="description">Please, Add ToDo</h2>
      <form className="todo-form">
        <h4 className="description">Title</h4>
        <input
          value={todotitle}
          onChange={handleTitle}
          className="input-area"
          type="text"
        />
        <h4 className="description">ToDo Description</h4>
        <textarea
          value={tododescription}
          onChange={handleDescription}
          className="input-area"
          rows={4}
        ></textarea>
        <button onClick={handleTodoInfo} className="add-todo-button">Create Todo</button>
      </form>
    </div>
  );
}

export default TodoCreate;

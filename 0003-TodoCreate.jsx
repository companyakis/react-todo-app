import React from "react";

function TodoCreate() {
  return (
    <div className="todo-div">
      
      <h2 className="description">Please, Add ToDo</h2>
      
      <form className="todo-form">
        <h4 className="description">Title</h4>
        
        <input className="input-area" type="text" />
        
        <h4 className="description">ToDo Description</h4>
        
        <textarea className="input-area" rows={4}></textarea>
        
        <button className="add-todo-button">Create Todo</button>
      </form>
      
    </div>
  );
}

export default TodoCreate;

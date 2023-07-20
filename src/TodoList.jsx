import React from "react";
import './TodoList.css'

function TodoList() {
    return(
        <div>
            <h1>To-do List</h1>
            <form>
                <input 
                type="text" 
                placeholder="Add a task"
                />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="todolist">
                <div className="item">
                    <span>Example</span>
                    <button className="del">Delete</button>
                </div>
                <div className="item complete">
                    <span>Example</span>
                    <button className="del">Delete</button>
                </div>
                <button className="deleteAll">Delete All</button>
            </div>
        </div>
    )
}

export default TodoList
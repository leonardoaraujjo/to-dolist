import React from "react";
import { useState, useEffect } from "react"
import './TodoList.css'
import Icon from './assets/images.jpg'

function TodoList() {

    const listStorage = localStorage.getItem('List');

    const [list, setlist] = useState(listStorage ? JSON.parse(listStorage) : []);
    const [newItem, setNewItem] = useState("");

    useEffect(() => {
        localStorage.setItem('List', JSON.stringify(list));
    },[list])

    function addItem(form) {
        form.preventDefault();
        if (!newItem) {
            return;
        }
        setlist([...list, { text: newItem, isComplited: false }])
        setNewItem("");
        document.getElementById('input-enter').focus();
    }

    function click(index) {
        const listAux = [...list];
        listAux[index].isComplited = !listAux[index].isComplited;
        setlist(listAux);
    }

    function deleted(index) {
        const listAux = [...list];
        listAux.splice(index,1);
        setlist(listAux);
    }

    function deleteAll() {
        setlist([]);
    }

    return (
        <div>
            <h1>To-do List</h1>
            <form onSubmit={addItem}>
                <input
                    id="input-enter"
                    type="text"
                    value={newItem}
                    onChange={(e) => { setNewItem(e.target.value) }}
                    placeholder="Add a task"
                />
                <button className="add" type="submit">Add</button>
            </form>
            <div className="todolist">
                {
                    list.length < 1
                        ?
                        <img className="icon" src={Icon} />
                        :
                        list.map((item, index) =>(
                            <div 
                            key={index}
                            className={item.isComplited ? "item complete" : "item"}>
                            <span onClick={() => {click(index)}}>{item.text}</span>
                            <button onClick={() => {deleted(index)}}className="del">Delete</button>
                        </div>
                        ) )    
                }
                {
                    list.length > 0 && 
                    <button onClick={() => {deleteAll()}} className="deleteAll">Delete All</button>
                }
                
            </div>
        </div>
    )
}

export default TodoList
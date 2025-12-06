
import React, { useState } from 'react';

const Uitodo = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Learn React', completed: false },
        { id: 2, title: 'Build a Todo App', completed: false },
        { id: 3, title: 'Master JavaScript', completed: false },
    ]);
    const [newTodoText, setNewTodoText] = useState('');

    const addTodo = () => {
        if (!newTodoText.trim()) return;
        const newTodo = {
            id: Date.now(),
            title: newTodoText,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setNewTodoText('');
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const todoList = todos.map(todo => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleComplete(todo.id)} 
            />
            {todo.title}
            <button className='btn btn-danger btn-sm mx-2' onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    ));
    //delete function one by one 
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };


    return (
        <div>
            <section className="card mb-3 mx-auto border-primary around-3 border-3 p-3" style={{width: "18rem"}}>
                <h2>Todo List</h2>
                <input 
                    type="text" 
                    placeholder="Enter new todo" 
                    value={newTodoText} 
                    onChange={(e) => setNewTodoText(e.target.value)} 
                />
                <button className='btn btn-primary mt-2' onClick={addTodo}>Add Todo</button> 
                <ul>
                    {todoList}
                </ul>
            </section>
        </div>
    );
};

export default Uitodo;
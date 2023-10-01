import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './index.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo..."
      />
      <br></br>
      <br></br>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

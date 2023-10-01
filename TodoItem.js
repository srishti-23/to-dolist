import React from 'react';
import './index.css';

function TodoItem({ todo, onDelete }) {
  return (
    <li>
      {todo}<br></br>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;

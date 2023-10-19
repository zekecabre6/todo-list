// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div class="card">
      <span class="card-title">
        <p>{todo.text}</p></span>
      <button class='a' onClick={() => onDelete(todo.id)}>Eliminar</button>
    </div>
  );
};

export default TodoItem;

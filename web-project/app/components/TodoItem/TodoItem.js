import React from 'react';

const TodoItem = ({ todo }) => (
  <div className="bg-white border border-gray-300 p-2.5 mb-2.5 flex items-center">
    <input type="checkbox" className="mr-2.5" checked={todo.completed} readOnly />
    <span className={`flex-grow ${todo.completed ? 'text-gray-500 line-through' : 'text-black'}`}>
      {todo.text}
    </span>
    <button className="bg-red-600 text-white border-none py-1 px-2.5 cursor-pointer">
      Delete
    </button>
  </div>
);

export default TodoItem;

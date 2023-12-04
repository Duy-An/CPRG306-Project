"use client";
import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TaskList = ({ tasks, onComplete }) => {
  const [sortType, setSortType] = useState('all');

  const sortedTasks = tasks.filter(task => {
    if (sortType === 'all') return true;
    return task.type === sortType;
  });

  const sortButtonStyle = (buttonType) => ({
    marginRight: '10px', 
    border: '1px solid rgb(69, 10, 10)', 
    backgroundColor: sortType === buttonType ? 'green' : 'white',
    padding: '3px 10px',
  });

  return (
    
    <div className="ml-5">
      <div className="w-fit mb-2 top-0 left-0 font-inter font-semibold text-lg leading-7 text-black">
        Task List
      </div>
      <div className="w-[368px] h-[37px] top-[30px] left-0 font-inter font-semibold text-lg leading-7 text-black">
        <button onClick={() => setSortType('all')} style={sortButtonStyle('all')}>All</button>
        <button onClick={() => setSortType('important')} style={sortButtonStyle('important')}>Important</button>
        <button onClick={() => setSortType('urgent')} style={sortButtonStyle('urgent')}>Urgent</button>
        {/* ...existing elements... */}
        {sortedTasks.map((task, index) => (
          <TodoItem 
            key={index} 
            todo={task} 
            onComplete={() => onComplete(task)} 
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;


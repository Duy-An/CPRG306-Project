"use client";
import React, { useState, useEffect } from 'react';
const AddTask = ({ onAddTask }) => {
  const [task, setTask] = useState('');
  const [type, setType] = useState('daily'); // default type
  const [listText, setlistText] = useState('My Favorite List');
  const [complete, setComplete] = useState(false);

  function handleListText(text) {
    setlistText(text);
  };

  useEffect(() => {
    handleListText(listText);
  }, [listText]);

  const handleAddTask = () => {
    if(task !== '') {
      onAddTask({ task, type, listText, complete });
      setTask(''); // reset input field
    }
  };

  const buttonStyle = (buttonType) => ({
    marginRight: '10px', 
    border: '1px solid rgb(69, 10, 10)', 
    backgroundColor: type === buttonType ? 'green' : 'white', // Change color if selected
    padding: '3px 10px'
  });

  return (
    <div className="h-fit mt-8 ml-5 mb-5">
      <input placeholder='My Favorite List' className='font-inter font-semibold text-2xl text-black mb-2 border border-slate-400 rounded' onChange={(event) => handleAddTask(event.target.value)} />
      <div className="flex items-center border border-gray-400 bg-gray-300 w-fit h-[50px] top-[45px] rounded">
        <div className="w-[40px] h-[40px] ml-1.5 border-2 border-gray-600 flex items-center justify-center">
          {/* Plus icon can be added here, possibly as an SVG */}
        </div>
        <input 
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a Task" 
          className="w-64 h-6 ml-3 text-lg leading-6 bg-transparent text-black border-none outline-none font-inter"
        />
        </div>

        <div className="flex items-center mt-3">
        <button onClick={() => setType('daily')} style={buttonStyle('daily')}>Daily</button>
        <button onClick={() => setType('important')} style={buttonStyle('important')}>Important</button>
        <button onClick={() => setType('urgent')} style={buttonStyle('urgent')}>Urgent</button>
        <button onClick={handleAddTask} className='border border-black px-3 py-1 rounded'>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;

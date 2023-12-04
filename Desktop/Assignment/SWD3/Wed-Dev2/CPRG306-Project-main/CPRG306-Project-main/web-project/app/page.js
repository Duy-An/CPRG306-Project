"use client";
import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import FunctionBar from './components/FunctionBar';
import CompletedTasks from './components/CompletedTasks';
import CompletedLists from './components/CompletedLists';
const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleComplete = (completedTask) => {
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter(task => task !== completedTask));
  };

  return (
    <div className='w-full bg-white flex'>
      <div>
        <FunctionBar />
        <CompletedLists/>
      </div>
      <main className='bg-white flex w-screen h-auto'>
        <div className='w-8/12 h-fit'>
          <AddTask onAddTask={addTask} />
          <TaskList tasks={tasks} onComplete={handleComplete} />
        </div>
        <CompletedTasks tasks={completedTasks} />
      </main>
    </div>
  );
};

export default Page;


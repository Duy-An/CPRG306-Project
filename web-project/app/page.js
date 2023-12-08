"use client";
import React, { useEffect, useState } from 'react';
import TaskList from './src/components/TaskList';
import AddTask from './src/components/AddTask';
import FunctionBar from './src/components/FunctionBar';
import CompletedTasks from './src/components/CompletedTasks';
import CompletedLists from './src/components/CompletedLists';
import {getTasks, addTasks, updateTasks, getTasksFromList} from './src/database/DatabaseConnect';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthContextProvider } from './src/_utilities/authContext';

const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [completeList, setCompleteList] = useState([]);
  const [displayTasks, setDisplayTasks] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [listText, setListText] = useState('My Favorite List');

  // Add Task
  const addTask = async (newTask) => {
    await setTasks(newTask);
  };

  useEffect( () => {
    console.log(tasks);
    addTasks(tasks);
  }, [tasks]);

  // Load Task List from Database
  async function loadTasks() {
    const result = await getTasks();
    console.log(result);
    const filterList = result.map(task => task.listText).filter((value, index, self) => self.indexOf(value) === index);
    setDisplayTasks(filterList);
    console.log(filterList);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  // Completed Task
  const handleComplete = (item) => {
    item.complete = true;
    updateTasks(item);
    console.log(item);
  };

  // Completed List Selected
  function handleList(text) {
    setListText(text);
  };

  // Load Completed Tasks from Completed List Selected
  async function loadCompletedList() {
    const result = await getTasksFromList(listText);
    console.log(result);
    setDisplayList(result);
  }

  useEffect(() => { 
    loadCompletedList();
  }, [listText]);

  return (
    <div className='w-full bg-white flex'>
      <AuthContextProvider>
        <div>
          <FunctionBar />
          <CompletedLists displayTasks={displayTasks} handleList={handleList}/>
        </div>
        <main className='bg-white flex w-screen h-auto'>
          <div className='w-8/12 h-fit'>
            <AddTask onAddTask={addTask} />
            <TaskList displayList={displayList} handleComplete={(item) => handleComplete(item)} />
          </div>
          <CompletedTasks displayList={displayList} />
        </main>
      </AuthContextProvider>
    </div>
  );
};

export default Page;
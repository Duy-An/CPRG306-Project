"use client";
import React, { useEffect, useState } from 'react';
import TaskList from './src/components/TaskList';
import AddTask from './src/components/AddTask';
import FunctionBar from './src/components/FunctionBar';
import CompletedTasks from './src/components/CompletedTasks';
import CompletedLists from './src/components/CompletedLists';
import {getTasks, addTasks, updateTasks} from './src/database/DatabaseConnect';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthContextProvider } from './src/utilities/authContext';

const Page = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [displayTasks, setDisplayTasks] = useState([]);
  const [userId, setUserId] = useState('');
  const [list, setList] = useState([]);
  const [listText, setListText] = useState('My Favorite List');

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await setUserId(user.uid);
    } else {
      return;
    }
  });

  // Add Task
  const addTask = async (newTask) => {
    console.log(newTask)
    const item = {name: newTask.task, type: newTask.type, listText: newTask.listText, complete: newTask.complete};
    console.log(item)
    await setTasks(item);
  };

  useEffect( () => {
    console.log(tasks);
    console.log(userId);
    addTasks(userId, tasks);
  }, [tasks]);

  async function loadTasks() {
    const condition = false;
    const result = await getTasks(userId, listText, condition);
    console.log(result);
    setList(listText);
    setDisplayTasks(result);
  }

  useEffect(() => {
    loadTasks();
  }, [userId]);

  const handleComplete = (item) => {
    item.complete = true;
    updateTasks(userId, item);
    //setTasks(displayTasks.filter(task => task.complete == false));
    //need update method here
  };



  return (
    <div className='w-full bg-white flex'>
      <AuthContextProvider>
        <div>
          <FunctionBar />
          <CompletedLists propList={listText} handleListText={listText}/>
        </div>
        <main className='bg-white flex w-screen h-auto'>
          <div className='w-8/12 h-fit'>
            <AddTask onAddTask={addTask} />
            <TaskList tasks={displayTasks} onComplete={(item) => handleComplete(item)} />
          </div>
          <CompletedTasks tasks={completedTasks} />
        </main>
      </AuthContextProvider>
    </div>
  );
};

export default Page;


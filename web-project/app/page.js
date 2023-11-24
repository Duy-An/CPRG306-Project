import React from 'react';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';
import FunctionBar from './components/Function/FunctionBar';
import CompletedLists from './components/CompletedLists/CompletedLists';
import CompletedTasks from './components/CompletedTasks/CompletedTasks';

const Page = () => {
  return (
    <div >
      <FunctionBar />
      <CompletedLists /> 
      
      <main >
        <AddTask />
        <TaskList />
        <CompletedTasks />
      </main>
    </div>
  );
};

export default Page;

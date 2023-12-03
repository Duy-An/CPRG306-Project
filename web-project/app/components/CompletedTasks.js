import React from 'react';

const CompletedTasks = ({ tasks }) => {
  return (
    <div className="w-[537px] ml-[980px] mt-[42px] font-inter">
      <div className="font-semibold text-lg leading-7 text-black">
        Completed Tasks
      </div>
      {tasks.map((task, index) => (
        <div key={index} className="w-[500px] h-10 bg-gray-300 border border-gray-400 flex items-center px-4 my-2">
          <span className="ml-5">{task.text}</span>
          {/* If task object contains more information, you can display it here */}
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;

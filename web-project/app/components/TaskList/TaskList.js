import React from 'react';

const TaskList = () => {
  return (
    <div className="absolute w-[784px] h-[305px] left-[335px] top-[180px] ">
      <div className="absolute w-[368px] h-[37px] top-0 left-0 font-inter font-semibold text-lg leading-7 text-black">
        Task List
      </div>
      <button className="w-[500px] h-10 bg-gray-300 border border-gray-400 flex items-center pl-14 text-lg leading-6 text-black mt-7 mb-2.5 font-inter">
        Do Laundry
      </button>
      {/* Repeat for other buttons */}
      <button className="w-[500px] h-10 bg-gray-300 border border-gray-400 flex items-center pl-14 text-lg leading-6 text-black mt-2.5 mb-2.5 font-inter">
        Dishwash
      </button>
      <button className="w-[500px] h-10 bg-gray-300 border border-gray-400 flex items-center pl-14 text-lg leading-6 text-black mt-2.5 mb-2.5 font-inter">
        Grocery Shopping
      </button>
      <button className="w-[500px] h-10 bg-gray-300 border border-gray-400 flex items-center pl-14 text-lg leading-6 text-black mt-2.5 mb-2.5 font-inter">
        Homework
      </button>
      {/* Add more tasks as needed */}
    </div>
  );
};

export default TaskList;

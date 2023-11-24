import React from 'react';

const AddTask = () => {
  return (
    <div className="absolute w-[600px] h-[104px] left-[335px] top-[42px]">
      <div className="absolute w-[368px] h-[37px] top-0 left-0 font-inter font-semibold text-2xl leading-[31px] text-black">
        List 10
      </div>
      <div className="absolute flex items-center border border-gray-400 bg-gray-300 w-full h-[50px] top-[45px]">
        <div className="w-[40px] h-[40px] ml-1.5 border-2 border-gray-600 flex items-center justify-center">
          {/* Plus icon can be added here, possibly as an SVG */}
        </div>
        <input 
          type="text" 
          placeholder="Add a Task" 
          className="w-full h-6 ml-3 text-lg leading-6 bg-transparent text-black border-none outline-none font-inter"
        />
      </div>
    </div>
  );
};

export default AddTask;

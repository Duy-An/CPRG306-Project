'use client';
import React from 'react';
import Account from './Account';

const FunctionBar = () => {

  return (
    <div className="block w-64 h-80 bg-gray-300 border-r border-b border-black box-border p-5 z-10">
      <Account />
      {/* List Icon */}
      <div className="absolute w-8 h-8 border-2 border-gray-600 rounded mt-10 ml-5">
        {/* Add icon content or SVG here */}
      </div>
      <div className="absolute left-[100px] mt-10 leading-8 font-inter text-lg text-black">
        Daily Task
      </div>

      {/* Star Icon */}
      <div className="absolute w-8 h-8 bg-gray-600 left-[40px] mt-28 clip-[polygon(50%_0%,_61%_35%,_98%_35%,_68%_57%,_79%_91%,_50%_70%,_21%_91%,_32%_57%,_2%_35%,_39%_35%)]">
        {/* Add icon content or SVG here */}
      </div>
      <div className="absolute left-[100px] mt-28 leading-8 font-inter text-lg text-black">
        Important
      </div>

      {/* Triangle Icon */}
      <div className="absolute w-0 h-0 left-[40px] mt-48 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-gray-600">
        {/* Add icon content or SVG here */}
      </div>
      <div className="absolute left-[100px] mt-48 leading-6 font-inter text-lg text-black">
        Urgent
      </div>
    </div>
  );
};

export default FunctionBar;

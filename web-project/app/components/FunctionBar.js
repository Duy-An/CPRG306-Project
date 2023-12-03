import React from 'react';

const FunctionBar = () => {
  return (
    <div className="absolute w-[314px] h-[403px] bg-gray-300 border-r border-b border-black box-border p-5">
      {/* List Icon */}
      <div className="absolute w-8 h-8 border-2 border-gray-600 rounded mt-[85px] ml-5">
        {/* Add icon content or SVG here */}
      </div>
      <div className="absolute left-[100px] top-[113px] font-inter text-lg leading-6 text-black">
        Daily Task
      </div>

      {/* Star Icon */}
      <div className="absolute w-8 h-8 bg-gray-600 left-[40px] top-[187px] clip-[polygon(50%_0%,_61%_35%,_98%_35%,_68%_57%,_79%_91%,_50%_70%,_21%_91%,_32%_57%,_2%_35%,_39%_35%)]">
        {/* Add icon content or SVG here */}
      </div>
      <div className="absolute left-[100px] top-[193px] font-inter text-lg leading-6 text-black">
        Important
      </div>

      {/* Triangle Icon */}
      <div className="absolute w-0 h-0 left-[40px] top-[268px] border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[24px] border-b-gray-600">
        {/* Add icon content or SVG here */}
      </div>
      <div className="absolute left-[100px] top-[277px] font-inter text-lg leading-6 text-black">
        Urgent
      </div>
    </div>
  );
};

export default FunctionBar;

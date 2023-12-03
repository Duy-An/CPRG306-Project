import React from 'react';

const CompletedLists = () => {
  return (
    <div style={{ backgroundColor: '#f3f3f3' }}>
    <div className="absolute w-[314px] h-[714px] left-0 top-[403px] bg-gray-300 border-r border-black box-border">
      <div className="absolute w-[185px] h-[32px] left-[65px] top-[14px] font-inter font-semibold text-xl leading-7 text-black">
        Completed Lists
      </div>
      <div className="relative mt-10">
        <div className="font-inter text-lg leading-6 text-black">
          List 1
        </div>
        <div className="font-inter text-lg leading-6 text-black mt-4">
          List 2
        </div>
        {/* Additional list items with respective margins */}
        <div className="font-inter text-lg leading-6 text-black mt-4">
          Travel List
        </div>
        {/* ... more list items as needed ... */}
      </div>
    </div>
    </div>
  );
};

export default CompletedLists;

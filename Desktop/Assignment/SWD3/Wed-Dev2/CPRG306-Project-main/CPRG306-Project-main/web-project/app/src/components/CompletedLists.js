import React, {useState, useEffect} from 'react';

const CompletedLists = ({displayTasks, handleList}) => {
  const [list, setList] = useState([]);
  const [selectedList, setSelectedList] = useState('');

  function handleSelectedList(text) {
    setSelectedList(text);
  };

  useEffect(() => {
    handleSelectedList(handleList);
  }, [handleList]);

  useEffect(() => {
    setList(displayTasks);
  }, [displayTasks]);

  return (
    <div className="block w-64 left-0 h-fit bg-gray-300 border border-black box-border">
      <div className="block w-full h-[32px] text-center pt-4 font-inter font-semibold text-xl leading-7 text-black">
        Completed Lists
      </div>
      <div className="mt-10 ml-2 h-full">
        {list ? list.map((item, index) => {
          return <div className="font-inter text-lg leading-6 text-black" key={index} >
            <button onClick={() => handleList(item)}>{item}</button>
        </div>
        }) : 'No Completed Lists'}
        {/* ... more list items as needed ... */}
      </div>
    </div>
  );
};

export default CompletedLists;

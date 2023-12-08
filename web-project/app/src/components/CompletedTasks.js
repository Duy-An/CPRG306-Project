import React, {useState, useEffect} from 'react';

const CompletedTasks = ({ displayList }) => {
  const [displayCompletedList, setDisplayCompletedList] = useState([]);
  console.log(displayList);

  async function handleDisplayCompletedList(text) {
    await setDisplayCompletedList(text.filter((item) => item.complete === true));
  }

  useEffect(() => {
    if(displayList != null) {
      handleDisplayCompletedList(displayList);
    }
  }, [displayList]);
  
  console.log(displayCompletedList);
  return (
    <div className="w-4/12 font-inter mx-2 mt-5">
      <div className="font-semibold text-lg leading-7 text-black">
        Completed Tasks
      </div>
      {displayCompletedList.map((task, index) => (
        <div key={index} className="h-10 bg-gray-300 border border-gray-400 flex items-center px-4 my-2">
          <span className="ml-5">{task.task}</span>
          {/* If task object contains more information, you can display it here */}
        </div>
      ))}
    </div>
  );
};

export default CompletedTasks;
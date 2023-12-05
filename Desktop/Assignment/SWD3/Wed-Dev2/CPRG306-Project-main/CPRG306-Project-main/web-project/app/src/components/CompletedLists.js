import React, {useState, useEffect} from 'react';

const CompletedLists = (propList, handleListText) => {
  const [listText, setListText] = useState([propList.listText]);
  const [selectedList, setSelectedList] = useState('');

  function handleListText(text) {
    setSelectedList(text);
  }

  useEffect(() => {
    handleListText(listText);
  }, [listText]);

  return (
    <div className="block w-64 left-0 h-fit bg-gray-300 border border-black box-border">
      <div className="block w-full h-[32px] text-center pt-4 font-inter font-semibold text-xl leading-7 text-black">
        Completed Lists
      </div>
      <div className="mt-10 ml-2 h-full">
        {/* {list ? list.map((item, index) => {
          return <div className="font-inter text-lg leading-6 text-black" key={index} onClick={(event) => handleListText(event.target.value)}>
          {item}
        </div>
        }) : 'No Completed Lists'}; */}
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
  );
};

export default CompletedLists;

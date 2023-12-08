import React from 'react';

const TodoItem = ({ todo, onComplete }) => {
  // Function to return the icon based on the task type
  const getIconForType = (type) => {
    switch (type) {
      case 'important':
        return '🌟'; // Icon for important
      case 'urgent':
        return '⏰'; // Icon for urgent
      default:
        return ''; // No icon for daily tasks
    }
  };

  return (
    <div className="todoItem">
      {/* Display task with type icon if needed */}
      <span className="todoText">{todo.task}</span>
      {getIconForType(todo.type) && <span className="todoIcon">{getIconForType(todo.type)}</span>}
      
      {/* Complete Button */}
      <button className="completeButton" onClick={onComplete}>Complete</button>

      {/* Additional Styling */}
      <style jsx>{`
        .todoItem {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          border: 1px solid #ccc;
          margin: 10px 0;
        }
        .todoText {
          flex-grow: 1;
        }
        .todoIcon {
          margin-right: 10px;
        }
        .completeButton {
          background-color: green;
          color: white;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
        }
        .completeButton:hover {
          background-color: darkgreen;
        }
      `}</style>
    </div>
  );
};

export default TodoItem;
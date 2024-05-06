// TaskList.js
import React from 'react';

const TaskList = ({ tasks, onUpdateStatus, onDelete }) => {
    return (
      <ul className="task-list"> {/* Add class name for styling */}
        {tasks.map((task) => (
          <li className="task-item" key={task.id}> {/* Add class name for styling */}
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <span>Status: {task.status}</span>
            </div>
            <div>
              <select
                value={task.status}
                onChange={(e) => onUpdateStatus(task.id, e.target.value)}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
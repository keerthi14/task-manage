import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import './App.css';
function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const updateStatus = (taskId, status) => {
    setTasks(tasks.map((task) => 
      task.id === taskId ? { ...task, status: status } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Task Management Application</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList
        tasks={tasks}
        onUpdateStatus={updateStatus}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
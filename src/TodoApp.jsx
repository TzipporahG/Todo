import { useState, useRef } from 'react';
import { TodoItem } from './TodoItem';

export function TodoApp() {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      alert("Please enter a value");
      return;
    }
    const newTask = {
      id: Date.now(),
      value: name,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setName("");
    inputRef.current.focus(); // Keep the input field focused
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container"> 
        <form onSubmit={handleSubmit} className="form">
        <label>Enter an item into the list:
            <input 
            className="input-field"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={inputRef} // Attach the ref to the input field
            />
        </label>
        <input type="submit" className="add-button"/>
        </form>

        <ul className="taskList">
            {tasks.map((task) => (
                <TodoItem key={task.id} task={task} onDelete={() => handleDelete(task.id)} />
            ))}
        </ul>
    </div>
  );
}


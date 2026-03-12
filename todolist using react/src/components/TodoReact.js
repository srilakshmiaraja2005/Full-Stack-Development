
import React, { useState } from "react";

const TodoReact = () => {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null); 

    const handleAction = () => {
        if (task.trim() === "") return; 

        if (editIndex !== null) {
           
            const updatedTasks = [...tasks];
            updatedTasks[editIndex] = task;
            setTasks(updatedTasks);
            setEditIndex(null); 
        } else {
            
            setTasks([...tasks, task]);
        }
        setTask(""); 
    };

    const handleEdit = (index) => {
        setTask(tasks[index]); 
        setEditIndex(index);    
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        if (editIndex === index) {
            setEditIndex(null);
            setTask("");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>To do list</h1>

            <input
                type="text"
                value={task} 
                placeholder="Enter the task"
                onChange={(e) => setTask(e.target.value)}
            />

            
            <button onClick={handleAction}>
                {editIndex !== null ? "Update Task" : "Add Task"}
            </button>

            <ul>
                {tasks.map((t, index) => (
                    <li key={index} style={{ marginBottom: "10px" }}>
                        {t} 
                        <button onClick={() => handleEdit(index)} style={{ marginLeft: "10px" }}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoReact;
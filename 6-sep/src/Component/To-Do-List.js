import { useState } from 'react'
export default function ToDoList() {
    const [allTask, setTask] = useState([]);
    const [editingContinue, setEditing] = useState(-1);
    const [newTask, setNewTask] = useState("");
    const handleSubmitTask = (e) => {
        e.preventDefault();
        if (newTask.trim() !== "") {
            if (editingContinue === -1) {
                setTask([...allTask, newTask]);
            } else {
                let updatedTask = [...allTask];
                updatedTask[editingContinue] = newTask;
                setTask(updatedTask);
                setEditing(-1);
            }
            setNewTask("");
        } else {
            alert("Please Enter The Value")
        }
    }
    const onDeleteButton = (index) => {
        let updatedArray = allTask.filter((ele, i) => i !== index)
        setTask(updatedArray);
    }
    const onEditButton = (index) => {
        setEditing(index);
        setNewTask(allTask[index]);
    }
    return (
        <div className='main-to-do'>
            <h2>To Do List</h2>
            <form className='to-do-form' action="" onSubmit={handleSubmitTask}>
                <input type="text" name='addTask' onChange={(e) => setNewTask(e.target.value)} value={newTask} />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {allTask.map((ele, index) => (
                    <li key={index}>
                        {ele}
                        <button onClick={() => onEditButton(index)}>edit</button>
                        <button onClick={() => onDeleteButton(index)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
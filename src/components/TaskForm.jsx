import { useState, useEffect } from 'react'

const initialState = { 
  taskTitle: "",
  taskDescription: "",
  taskStatus: "pending",
  priority: "low",
  dueDate: ""
}

const TaskForm = ({ onSubmit, editingTask, cancelEdit }) => {
  const [task, setTask] = useState(initialState)

  // FIX 1: Correct hook name
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask)
    }
  }, [editingTask])

  // FIX 2: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setTask({ ...task, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(task)
    setTask(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>{editingTask ? "Edit Task" : "Add New Task"}</h4>

      <input
        className="form-control mb-2"
        name="taskTitle"
        placeholder="Title"
        value={task.taskTitle}
        onChange={handleChange}
        required
      />

      <textarea
        className="form-control mb-2"
        name="taskDescription"
        placeholder="Description"
        value={task.taskDescription}
        onChange={handleChange}
        required
      />

      <select
        className="form-control mb-2"
        name="taskStatus"
        value={task.taskStatus}
        onChange={handleChange}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <select
        className="form-control mb-2"
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <input
        className="form-control mb-2"
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        required
      />

      <button className="btn btn-primary">
        {editingTask ? "Update" : "Add Task"}
      </button>

      {editingTask && (
        <button
          type="button"
          className="btn btn-secondary ms-2"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      )}
    </form>
  )
}

export default TaskForm

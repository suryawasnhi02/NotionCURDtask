import React, { useState, useEffect } from 'react'
import TaskForm from '../components/TaskForm'
import TaskTable from '../components/TaskTable'
import { getTasks, createTask, updateTask, deleteTask } from '../services/api'

const Tasks = () => {
  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState(null)

  const fetchTasks = async () => {
    const res = await getTasks()
    setTasks(res.data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleSubmit = async (task) => {
    if (editingTask) {
      await updateTask(editingTask.id, task)
      setEditingTask(null)
    } else {
      await createTask(task)   // ✅ fixed
    }
    fetchTasks()
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      await deleteTask(id)
      fetchTasks()
    }
  }

  return (
    <div className="container mt-4">
      <TaskForm
        onSubmit={handleSubmit}
        editingTask={editingTask}
        cancleEdit={() => setEditingTask(null)}
      />
      <TaskTable
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default Tasks

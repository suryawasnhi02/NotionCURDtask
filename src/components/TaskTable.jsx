import React from 'react'

const TaskTable = ({ tasks, onEdit, onDelete }) => {


  return (
    <table className='table table-bordered table-striped'>
        <thead>
            <tr>
                <th>Title</th>  
                <th>Due Date</th>
                <th>Status</th>
                <th>Priority</th> 
                <th>Actions</th>
            </tr>
        </thead>  

        <tbody>
            {tasks.map((task) => (
                <tr key={task.id}>
                    <td>{task.taskTitle}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.taskstatus}</td>
                    <td>{task.priority}</td>
                    <td>
                        <button className='btn btn-sm btn-primary me-2' onClick={() => onEdit(task)}>Edit</button>
                        <button className='btn btn-sm btn-danger' onClick={() => onDelete(task.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default TaskTable;

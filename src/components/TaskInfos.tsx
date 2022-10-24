import React, { useState } from 'react'
import { taskConfig } from '../interface';


import './TaskInfos.css';
interface Taskprop{
  task: taskConfig,
  deleteTask(taskDeletedId: number): void,
  editTask(value: string, id: number): void,
}
const TaskInfos = ({ task, deleteTask, editTask }: Taskprop) => {

  const [editedTask, setEditedTask] = useState<string>('')


  return (

    <div className='TaskInfosContainer'>
      <p>{task.text}</p>
      <div>
        <input className='EditInput' type="text" value={editedTask} onChange={(e) => setEditedTask(e.target.value)} />
        <span className='EditButton' onClick={() => editTask(editedTask, task.id)}>Editar</span>
        <span className='DeleteButton' onClick={() => deleteTask(task.id)}>X</span>
      </div>
    </div>

  )
}

export default TaskInfos;

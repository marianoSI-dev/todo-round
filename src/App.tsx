import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TaskInfos from './components/TaskInfos';
import { taskConfig } from './interface';

const App = () => {

  const [taskText, setTaskText] = useState<string>('');
  const [tasksList, setTasksList] = useState<taskConfig[]>([]);
  const [tasksCounter, setTasksCounter] = useState<number>(0);
  const [id, setId] = useState<number>(1);


  //watch tasksList array and modify tasksCounter
  useEffect(() => {
    if (tasksList == null) {
      setTasksCounter(0)
    } else {
      setTasksCounter(tasksList.length)
      console.log(tasksList.length)
    }
  }, [tasksList])

  function addTask() {
    if (taskText != '') {
      setId((id) => id + 1)
      const newTask: taskConfig = {
        id: id,
        text: taskText
      }
      setTasksList([...tasksList, newTask])
    }
    setTaskText('')
  }

  function deleteTask(taskDeletedId: number): void {
    setTasksList(tasksList.filter((task) => task.id !== taskDeletedId))
  }

  //pensar amanha
  function editTask(value: string, id: number) {
    if (value) {
      setTasksList(prev => prev.map(item => item.id === id ? { id: id, text: value } : item));
    }
  }


  return (
    <>
      <Header quantity={tasksCounter} />
      {tasksList.map((task, i) => (
        <TaskInfos key={i} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
      <Form text={taskText} addTask={addTask} setTaskText={setTaskText}/>



    </>

  )
}

export default App;

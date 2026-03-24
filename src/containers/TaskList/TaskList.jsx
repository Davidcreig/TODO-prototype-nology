import React from 'react'
import TaskTile from '../../components/TaskTile/TaskTile'

const TaskList = ({tasks, handleDelete}) => {
   const mappedTasks = tasks.map((task,index)=><TaskTile task={task} handleDelete={handleDelete}/>) 
  return (
    <div>
    {mappedTasks ? mappedTasks : <>Nothing to see here yet... Add a task in the field above!</>}
    </div>
    
  )
}

export default TaskList
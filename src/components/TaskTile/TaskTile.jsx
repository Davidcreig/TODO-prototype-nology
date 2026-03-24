import React, { useState }from 'react'

import styles from "./TaskTile.module.css"

const TaskTile = ({task, handleDelete}) => {
    const[taskDone, setTaskDone] = useState(false);

  return (
    <div className={styles.tileLayout}>
        <div onClick={()=> setTaskDone((!taskDone))} className={styles.tileLayout}>
            <input checked={taskDone} type='checkbox' id="checkbox" onChange={(e)=> {setTaskDone(!taskDone); console.log(taskDone)}}/>
            <div className={taskDone ? styles.tileText : ""}>{task}</div>  
        </div>
        <button onClick={()=>handleDelete(task)}>X</button>
    </div>
  )
}

export default TaskTile
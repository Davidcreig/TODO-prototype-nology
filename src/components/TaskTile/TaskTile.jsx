import React, { useState }from 'react'

import deleteIcon from "../../assets/bin.png"

import styles from "./TaskTile.module.css"

const TaskTile = ({task, handleDelete}) => {
    const[taskDone, setTaskDone] = useState(false);

  return (
        <div className={styles.tileLayout}>
            <div className={styles.tileInside} onClick={()=> setTaskDone((!taskDone))} >
                <input checked={taskDone} type='checkbox' id="checkbox" onChange={(e)=> {setTaskDone(!taskDone);}}/>
                <div className={taskDone ? styles.tileText : ""}>{task}</div> 
            </div>  
        <button className={styles.button} onClick={()=>handleDelete(task)}>
            <img className={styles.binIcon} src={deleteIcon} alt="Delete" />
        </button>
        </div>
  )
}

export default TaskTile
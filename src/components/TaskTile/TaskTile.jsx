import React, { useEffect, useState }from 'react'

import deleteIcon from "../../assets/bin.png"

import styles from "./TaskTile.module.css"

const TaskTile = ({task, handleDelete}) => {
    const[taskDone, setTaskDone] = useState(task.checked);

    useEffect(()=>{updateChecked()},[taskDone]);

    const updateChecked = () =>{
        fetch('http://localhost:3000/task-done',{
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({checkedTask : {task:task,checked:taskDone}}),
    })};

  return (
        <div className={styles.tileLayout}>
            <div className={styles.tileInside} onClick={()=> setTaskDone((!taskDone))} >
                <input checked={taskDone} type='checkbox' id="checkbox" onChange={(e)=> {setTaskDone(!taskDone);}}/>
                <div className={taskDone ? styles.tileText : ""}>{task.text}</div> 
            </div> 
        <button className={styles.button} onClick={()=>handleDelete(task)}>
            <img className={styles.binIcon} src={deleteIcon} alt="Delete" />
        </button>
        </div>
  )
}

export default TaskTile
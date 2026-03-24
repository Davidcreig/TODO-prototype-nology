import React, { useState } from 'react'
import styles from "./InputTask.module.css"

import plusCircle from "../../assets/plus-circle.png"

const InputTask = ({setTasks}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInput = () => {
        if(!inputValue.trim()) return

        setTasks(prev => [...prev, inputValue]);
        setInputValue("");
    }

  return (
    <div className={styles.contents}>
        <input
        className={styles.inputLayout}
        placeholder={"Add your task here..."}
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        /><div className={styles.plusCircle}>
            <img onClick={handleInput} className={styles.plusCircle} alt="Add Task"
            src={plusCircle}
            /> 

        </div>
        
    </div>
    
  )
}

export default InputTask
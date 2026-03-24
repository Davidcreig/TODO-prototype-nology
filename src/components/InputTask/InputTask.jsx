import React, { useState } from 'react'
import "./InputTask.css"

import plusCircle from "../../assets/plus-circle.png"

const InputTask = ({setTasks}) => {

    const [inputValue, setInputValue] = useState("");

    const handleInput = () => {
        if(!inputValue.trim()) return

        setTasks(prev => [...prev, inputValue]);
        setInputValue("");
    }

  return (
    <div className='contents'>
        <input
        placeholder={"New Task"}
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        />
            <button onClick={handleInput}>+</button>
            {/* <img className='plusCircle'
            src={plusCircle}
            />  */}
        
    </div>
    
  )
}

export default InputTask
// https://davidcreig.github.io/TODO-prototype-nology/
import { useState } from 'react'
import styles from'./App.module.css'


import Button from "./components/Button/Button"
import InputTask from "./components/InputTask/InputTask"
import TaskList from "./containers/TaskList/TaskList"

function App() {
    const [tasks, setTasks] = useState(["Buy milk","Do the laundry"]);

    const handleReset = () => {
        setTasks("");
    }

    const handleDelete = (task) => {
        setTasks(prev => prev.filter(tasks => tasks !== task ))
    }

  return (
    <>
      <section className = {styles.section} id="center">
        <div className={styles.title}>My Todos <Button title="Reset" handlePress={handleReset}/></div>
        <div className={styles.inputTask}><InputTask setTasks={setTasks}/></div>
        <div><TaskList tasks={tasks} handleDelete={handleDelete}/></div>
        
      </section>
    </>
  )
}

export default App

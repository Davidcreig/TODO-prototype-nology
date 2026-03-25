// https://davidcreig.github.io/TODO-prototype-nology/
import { useEffect, useState } from 'react'
import styles from'./App.module.css'


import Button from "./components/Button/Button"
import InputTask from "./components/InputTask/InputTask"
import TaskList from "./containers/TaskList/TaskList"

function App() {
    const [tasks, setTasks] = useState(["Buy milk","Do the laundry"]);
    const [data, setData] = useState("");
    const [newPhoto, setNewPhoto] = useState("");
    
    useEffect(()=>{getData()},[newPhoto])
    
    const getData = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(data => setData(data))
    }

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
        <img className={styles.dogImage} src={data.message} alt="A Random Dog"/>
        <Button title="New Dog" handlePress={()=> setNewPhoto(!newPhoto)}/>
      </section>
    </>
  )
}

export default App

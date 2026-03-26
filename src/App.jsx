// https://davidcreig.github.io/TODO-prototype-nology/
import { use, useEffect, useState } from 'react'
import styles from'./App.module.css'


import Button from "./components/Button/Button"
import InputTask from "./components/InputTask/InputTask"
import TaskList from "./containers/TaskList/TaskList"

function App() {
    const [tasks, setTasks] = useState("");
    const [data, setData] = useState("");
    const [newPhoto, setNewPhoto] = useState("");
    useEffect(() => {getData()}, [newPhoto]);
    useEffect(() => {getTasks()}, []);
  
    const getTasks = () => {
        fetch("http://localhost:3000/tasks", {method: "GET"})
        .then(res => res.json())
        .then(data => setTasks(data))
    }
    const getData = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then(data => setData(data))
    }

    const handleReset = () => {
        fetch("http://localhost:3000/tasks/delete-all", {method: "DELETE"})
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTasks(data);
        })
    }

    const handleDelete = (task) => {
        const taskId = task._id
        // console.log(taskId)
        fetch(`http://localhost:3000/tasks/${taskId}`, { method: "DELETE" })
        .then(res => res.json())
        .then(data => setTasks(data))
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

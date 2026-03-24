import { useState } from 'react'
import './App.css'
import Button from "./components/Button/Button"
import InputTask from "./components/InputTask/InputTask"
import TaskList from "./containers/TaskList/TaskList"

function App() {
    const [tasks, setTasks] = useState(["Buy milk","laundry"]);

    const handleReset = () => {
        setTasks([]);
    }

    const handleDelete = (task) => {
        setTasks(prev => prev.filter(tasks => tasks !== task ))
    }

  return (
    <>
      <section id="center">
        <div>My Todos <Button title="Reset" handlePress={handleReset}/></div>
        <div><InputTask setTasks={setTasks}/></div>
        <div><TaskList tasks={tasks} handleDelete={handleDelete}/></div>
        
      </section>
    </>
  )
}

export default App

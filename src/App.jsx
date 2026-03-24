import { useState } from 'react'
import './App.css'
import Button from "./components/Button/Button"
import InputTask from "./components/InputTask/InputTask"
import TaskList from "./containers/TaskList/TaskList"

function App() {
    const [tasks, setTasks] = useState([]);

    const handleReset = () => {
      
    }

  return (
    <>
      <section id="center">
        <div>MY Todos <Button title="Reset" handlePress={handleReset}/></div>
        <div><InputTask/></div>
        <div><TaskList tasks={tasks}/></div>
        
      </section>
    </>
  )
}

export default App

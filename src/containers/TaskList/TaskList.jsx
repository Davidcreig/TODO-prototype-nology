import React from 'react'
import TaskTile from '../../components/TaskTile/TaskTile'
import styles from "./TaskList.module.css"
const TaskList = ({tasks, handleDelete}) => {
    
    return (
    <div className={styles.contents}>
        {tasks.length > 0 ? (
        tasks.map((task) => (
            <TaskTile
            key={task.text}
            task={task}
            handleDelete={handleDelete}
            />
        ))
        ) : (
        <>Nothing to see here yet... Add a task in the field above!</>
        )}
    </div>
    );
}

export default TaskList
import {TaskContext} from '../context/TaskContext';
import {useContext} from 'react'
function TaskCard({task}) {

const {deleteTask}=useContext(TaskContext)



    return (

        <div className="bg-gray-800 text-white p-4 rounded-md" >
               <button className="text-xs hover:bg-gray-900 rounded-lg p-1" onClick={()=>{deleteTask(task.id); dT()}}>❌</button>
            <h1 className="text-xl font-bold">{task.title}</h1>
            <p className="text-gray-500">{task.description}</p>
         
        </div>

    )
}

export default TaskCard
import { useState, useContext } from 'react';
import {TaskContext }from '../context/TaskContext';

function TaskForm() {
    const { createTask } = useContext(TaskContext)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

        createTask({ title, description })
        setTitle("");
        setDescription("");
    }

    return (

        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4" >
                <h1 className="text-2xl text-white font-bold mb-3 ">Crea tu tarea</h1>
            <input type="text" placeholder="Escribe tu tarea"
                onChange={(e) =>
                    setTitle(e.target.value)} value={title}
                autoFocus 
                className="bg-slate-300 p-3 w-full mb-2 outline-none"/>
            <textarea name="" id="" cols="30" rows="2" placeholder="Descripción de la tarea"
                onChange={(e) => setDescription(e.target.value)} value={description}
                className="bg-slate-300 p-3 w-full mb-2 outline-none" />
            <button className="bg-red-600 rounded-md p-2 pr-4 pl-4  hover:bg-red-700 ">
                Guardar
            </button>
        </form>
        </div>

    )
}

export default TaskForm
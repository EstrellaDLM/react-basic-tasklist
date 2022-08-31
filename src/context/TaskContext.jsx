//*Creando un contexto
/*
1ro Importar libreria de react para creaciioon de contexto
- import {createContext} from 'react';
2do le damos nombre al contexto que queremos crear
- const TaskContext = createContext();
3ro Creamos una funcion donde le daremos dimension al contexto.
Para esto crearemos una funcion que tendra "Provider" despues del nombre del contexto antes nombrado 

function TaskContext(props) {
    return (
    <TaskContext.Provider>
        {props.children}
    </TaskContext.Provider>
    )
}
Con esto ya creamos el espacio de nuestro contexto.
Con esto cualquier cosa que creemos dentro de nuestro contexto, puede apuntar al mismo contexto.
Esto quiere decir: 
Si el contexto accede a la base de datos, entonces, todos los componentes que esten dentro del contexto, pueden acceder y modificar esa base de datos
4to Nos dirigimos al jsx main, el que va a contener toda la app, e importamos nuestro contexto, para que engloble toda la app

import { TaskContextProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <TaskContextProvider>
                <App />
        </TaskContextProvider>
    </React.StrictMode>
)

Asi hacemos que el contexto sea el contenedor de la App


------------        ------  ----    --- --- ---
Como usar el contexto
1ro vamos a crear una simple constate y la consumire desde algun componente

export function TaskContextProvider(props) {
    const x =20;//constante
    return (
    <TaskContext.Provider value={x}>//la pasamos como parametro
        {props.children}
    </TaskContext.Provider>
    )
}

2.Ahoran nos dirigimos a usar ese valor,
para eso dentro del componente en que queremos usar la constante de

import {useContext} from 'react';

3. Le damos el nombre del contexto que queremos utilizar

import {TaskContext} from './context/TaskContext';
useContext(TaskContext)

const [x] =useContext(TaskContext)
*/



import {tasks as data} from '../data/task.js';
import {useState,useEffect, createContext } from 'react';


export const TaskContext = createContext();


export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])
    useEffect(
        () => {
            setTasks(data)
        }, []
    )
    function createTask({ title, description }) {
        setTasks([...tasks, {
            title,
            id: tasks.length,
            description
        }])
    }
    function deleteTask(id) {
        console.log(`Tarea con ${id} eliminada`)
        const newTasks = tasks.filter(a => a.id !== id)
        setTasks(newTasks)
    }
    return (
        <TaskContext.Provider value={{tasks,deleteTask,createTask}
        }
        >
            {props.children}
        </TaskContext.Provider>
    )
}


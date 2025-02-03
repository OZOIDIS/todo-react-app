import TaskList from './components/TaskList';
import {useState, useEffect} from 'react';
import { ITaskItem } from './abstractions/ItaskItem';

function App(){

  //Must be an array of tasks!
  const [tasks, setTasks] = useState<ITaskItem[]>([]);
  const [todoTasks, setTodoTasks] = useState<ITaskItem[]>([])
  const [inProgressTasks, setInProgressTasks] = useState<ITaskItem[]>([])
  const [doneTasks, setDoneTasks] = useState<ITaskItem[]>([])

  //API GETALL
  useEffect(() => {
    fetch('http://localhost:8080/api/tasks')
    .then(response => response.json())
    .then(json => setTasks(json))
    .catch(error => console.error(error));
  }, []);

  //API GETBYID
/*   useEffect(() => {
    fetch('http://localhost:8080/api/tasks/1')
    .then(response => response.json())
    .then(json => setTask(json))
    .catch(error => console.error(error));
  }, []); */
 
  useEffect(() => {
    setTodoTasks(tasks.filter(task => task.status == "To Do"));
    setInProgressTasks(tasks.filter(task => task.status == "In Progress"));
    setDoneTasks(tasks.filter(task => task.status == "Done"));
  }, [tasks]); // This dependency ensures it only runs when tasks change


 return <>
  
 {/* Handle empty tasks */}
  <div className="root-container">
      <TaskList tasks={todoTasks} title='ToDo'/>
      <TaskList tasks={inProgressTasks} title='In Progress'/>
      <TaskList tasks={doneTasks} title='Done'/>
  </div>

 </>;
}

export default App; 
import { ITaskItem } from '../abstractions/ItaskItem';
import TaskItem from './TaskItem';

function TaskList(props: { tasks: ITaskItem[], title: string }) {
  //const tasks = useSelector((state: RootState) => state.tasks);
  //const dispatch = useDispatch();
const tasks = props.tasks
const title = props.title

  return (
    <>
    <div className='taskList-container'>
    <h3 style={{textAlign: 'center' }}>{title}</h3>
        {tasks.map((task) => (
            <div className='task'>
                    <TaskItem {...task} />
            </div>
        ))}
    </div>
    </>
  );
}

export default TaskList;
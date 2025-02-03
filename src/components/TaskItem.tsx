import { ReactElement } from 'react';
import { ITaskItem } from '../abstractions/ItaskItem';
import { Link } from 'react-router-dom';

function TaskItem(props: ITaskItem) : ReactElement {
  const task = props
  return (
    <>
      <h3>{task.title}</h3>
      <Link to={`/tasks/${task.title}`} state={task}>
        <button>View</button>
      </Link>
    </>
  );
}

export default TaskItem;
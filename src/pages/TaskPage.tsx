import { useLocation } from "react-router-dom";

function TaskPage()
{
    const location = useLocation()
    const taskState = location.state || {};

    return(
    <>
        <h1>Task Page</h1>
        <h3>{taskState?.title}</h3>
        <p>{taskState?.description}</p>
        <h3>{taskState?.status}</h3>
    </>
    );
}

export default TaskPage
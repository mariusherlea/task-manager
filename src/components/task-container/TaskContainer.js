import "./TaskContainer.css";
import TaskCard from "../task-card/TaskCard";

function TaskContainer(props) {
  return (
    <div className="task-viewer-container">
      <div className="task-list-container">
        <TaskCard
          id={props.taskList[0].id}
          status={props.taskList[0].status}
          name={props.taskList[0].name}
          dueDate={props.taskList[0].dueDate}
        />
        <TaskCard
          id={props.taskList[1].id}
          status={props.taskList[1].status}
          name={props.taskList[1].name}
          dueDate={props.taskList[1].dueDate}
        />
        <TaskCard
          id={props.taskList[2].id}
          status={props.taskList[2].status}
          name={props.taskList[2].name}
          dueDate={props.taskList[2].dueDate}
        />
      </div>
    </div>
  );
}

export default TaskContainer;

import Task from './task';
import { TaskDto } from '../types/task.dto';

function TaskList({
  taskList: taskList,
  removeTask,
  updateTask,
}: {
  taskList: TaskDto[];
  removeTask: Function;
  updateTask: Function;
}) {
  // console.log(taskList);
  const taskArray =
    (taskList || []).map((task, index) => (
      <Task
        taskDetail={task}
        id={`${index}`}
        removeTask={removeTask}
        updateTask={updateTask}
      ></Task>
    )) || [];

  return (
    <>
      <div className="row">
        {taskArray.length > 0 ? taskArray : 'Task not found'}
      </div>
    </>
  );
}

export default TaskList;

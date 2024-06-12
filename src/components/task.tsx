import { TaskDto } from '../types/task.dto';

function Task({
  taskDetail,
  removeTask,
  updateTask,
}: {
  taskDetail: TaskDto;
  id: string;
  removeTask: Function;
  updateTask: Function;
}) {
  console.log(taskDetail);
  return (
    <div className="raw">
      <div className="hstack gap-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-10">
              <div className="checkbox-wrapper-11">
                <input
                  id={`task-${taskDetail._id}`}
                  type="checkbox"
                  value=""
                ></input>
                <label htmlFor={`task-${taskDetail._id}`}>
                  {taskDetail.name}
                </label>
              </div>
            </div>

            <div
              className="col-1"
              onClick={() => {
                updateTask(taskDetail._id);
              }}
            >
              <i className="bi bi-pen"></i>
            </div>
            <div
              className="col-1"
              onClick={() => {
                removeTask(taskDetail._id);
              }}
            >
              <i className="bi bi-archive"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;

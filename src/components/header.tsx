import { useRef } from 'react';
import { getCurrDateMilli } from '../utils/utils.ts';
import { TaskDto } from '../types/task.dto.ts';
import { v4 as uuidv4 } from 'uuid';
function HeaderMenu({ addTask }: { addTask: Function }) {
  const taskInput: any = useRef<HTMLLinkElement>(null);

  const add = () => {
    console.log('Add task', taskInput);
    if (taskInput.current !== null) {
      taskInput.current.focus();
    }
    addTask({
      _id: uuidv4(),
      name: taskInput.current.value,
      description: taskInput.current.value,
      createdAt: getCurrDateMilli(),
    } as TaskDto);
  };

  return (
    <div className="raw mb-3">
      <div className="hstack gap-2">
        <input
          ref={taskInput}
          className="form-control"
          type="text"
          placeholder="Default input"
          aria-label="default input example"
          onKeyDown={(event) => {
            // console.log(event.key);
            if (event.key === 'Enter') {
              add();
              taskInput.current.value = '';
            }
          }}
        ></input>
        <button type="button" className="btn btn-info" onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
}

export default HeaderMenu;

import HeaderMenu from './header';
import TaskList from './taskList';
import { useEffect, useState } from 'react';
import { TaskDto } from '../types/task.dto';
import localStorageUtils from '../utils/localStorage.util';
import { getCurrDateMilli } from '../utils/utils';

function Main() {
  const toDay = `${getCurrDateMilli()}`;
  const [taskList, setTaskList] = useState<TaskDto[]>([]);

  useEffect(() => {
    let prev_tasks = localStorageUtils.getItem(toDay) || [];
    // console.log('Getting tasks', prev_tasks);
    setTaskList((tasks) => (tasks = [...tasks, ...prev_tasks]));
    updateIcon(prev_tasks.length);
  }, []);

  const addTaskWrap = (task: TaskDto) => {
    // console.log(taskList);
    setTaskList((taskInstance) => (taskInstance = [task, ...taskInstance]));
    localStorageUtils.setItem(toDay, [task, ...taskList]);
    updateIcon(taskList.length + 1);
  };

  const updateIcon = (taskCount: Number) => {
    // console.log(JSON.stringify(chrome));
    // console.log(chrome);
    console.log('This is update icon function');
    chrome.action.setBadgeText({ text: `${taskCount}` });
    chrome.runtime.sendMessage({
      action: 'updateIcon',
      value: taskCount,
    });
  };

  const removeTask = (id: string) => {
    let filteredTasks = taskList.filter((obj: TaskDto) => {
      return `${obj._id}` != `${id}`;
    });
    setTaskList((_tasks) => (_tasks = filteredTasks));
    // console.log('After removed', filteredTasks);
    localStorageUtils.setItem(toDay, filteredTasks);
  };

  const updateTask = (index: string, obj: TaskDto) => {
    taskList[parseInt(index)] = obj;
    setTaskList(taskList);
  };

  return (
    <>
      <HeaderMenu addTask={addTaskWrap}></HeaderMenu>
      <TaskList
        taskList={taskList}
        removeTask={removeTask}
        updateTask={updateTask}
      ></TaskList>
    </>
  );
}
export default Main;

import { useState, useEffect } from 'react';

import { Task } from '../../models/Task';

export const useTaskState = (initialValue: Task[]) => {
  const [tasks, setTasks] = useState(initialValue);

  useEffect(() => {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      const tasksJson: Task[] = JSON.parse(tasks);

      setTasks(tasksJson);
    }
  }, []);

  return {
    tasks,
    setTasks,
    addTask: (task: Task) => {
      const newTask = {
        ...task,
        text: task.text.trim(),
      };

      const currentTasks = [...tasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(currentTasks));

      setTasks(currentTasks);
    },
    deleteTask: (taskId: string) => {
      const newTasks = tasks.filter((task) => task.id !== taskId);
      localStorage.setItem('tasks', JSON.stringify(newTasks));

      setTasks(newTasks);
    },
    completeTask: (task: Task) => {
      const taskToComplete = tasks.indexOf(task);
      const newTasks = [...tasks];
      newTasks[taskToComplete].completed = !task.completed;

      localStorage.setItem('tasks', JSON.stringify(newTasks));

      setTasks(newTasks);
    },
    updateTaskText: (task: Task, updatedText: string) => {
      const taskToUpdate = tasks.indexOf(task);
      const newTasks = [...tasks];
      newTasks[taskToUpdate].text = updatedText;

      localStorage.setItem('tasks', JSON.stringify(newTasks));

      setTasks(newTasks);
    },
  };
};

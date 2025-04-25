import { Injectable } from '@angular/core';
import { DUMMY_Tasks } from '../../dummy-tasks';
import { AddTask } from '../add-task/models/add-task.models';

@Injectable({
  providedIn: 'root',
})
export class TasksServices {
  private tasks: {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }[] = [];

  constructor() {
    const _tasks = localStorage.getItem('tasks');

    if (_tasks) {
      this.tasks = JSON.parse(_tasks);
    } else {
      localStorage.setItem('tasks', JSON.stringify(DUMMY_Tasks));
    }
  }

  getSelectedUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  onCompletedTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasksToLocalStorage();
  }

  onAddNewTask(task: AddTask, userId: string) {
    const newTask = {
      id: `u${Math.floor(Math.random() * 100)}`,
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    };

    this.tasks.unshift(newTask);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

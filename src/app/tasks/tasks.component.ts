import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_Tasks } from '../dummy-tasks';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddTask } from './add-task/models/add-task.models';
import { Task } from 'zone.js/lib/zone-impl';
import { TasksServices } from './services/tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string;
  selectedUserName = input<string>();
  isAddingTask = false;

  constructor(private tasksService: TasksServices) {}

  get taskList() {
    return this.tasksService.getSelectedUserTasks(this.selectedUserId);
  }

  addTaskInitiated() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}

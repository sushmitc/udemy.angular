import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_Tasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string;
  selectedUserName = input<string>();

  static tasks = DUMMY_Tasks;

  get taskList() {
    return TasksComponent.tasks.filter(
      (task) => task.userId === this.selectedUserId
    );
  }
}

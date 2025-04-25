import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddTask } from './models/add-task.models';
import { TasksServices } from '../services/tasks.services';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Input({ required: true }) selectedUserId!: string;
  @Output() addTaskCancel = new EventEmitter<void>();
  //@Output() addNewTask = new EventEmitter<AddTask>();
  private tasksServices = inject(TasksServices);

  enteredSummary = '';
  enteredTitle = signal('');
  eneteredDate = '';

  onAddTaskCancel() {
    this.addTaskCancel.emit();
  }

  onAddTask() {
    const task: AddTask = {
      title: this.enteredTitle(),
      summary: this.enteredSummary,
      dueDate: this.eneteredDate,
    };

    this.tasksServices.onAddNewTask(task, this.selectedUserId);

    this.addTaskCancel.emit();
    this.enteredTitle.set('');
    this.enteredSummary = '';
    this.eneteredDate = '';
  }
}

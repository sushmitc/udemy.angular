import {
  Component,
  InputSignal,
  Output,
  inject,
  input,
  output,
} from '@angular/core';
import { Task } from './models/task.model';
import { CardsComponent } from '../../shared/cards/cards.component';
import { DatePipe } from '@angular/common';
import { TasksServices } from '../services/tasks.services';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardsComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task: InputSignal<Task> = input.required<Task>();
  private tasksServices = inject(TasksServices);

  onCompleted() {
    // Logic to mark the task as completed
    this.tasksServices.onCompletedTask(this.task().id);
  }
}

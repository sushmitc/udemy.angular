import {
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  output,
  signal,
} from '@angular/core';

import { User } from './models/users.models';
import { CardsComponent } from '../shared/cards/cards.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //@Input() avatar!: string;
  @Input() user!: User;
  // @Input() avatar!: string;
  // @Input() name!: string;
  // @Input({ required: true }) id!: string;
  @Output() selectedUser = new EventEmitter<string>();
  // selectedUser = output<string>();
  selected = input.required<boolean>();
  // avatar = input<string>();
  // name = input.required<string>();

  // randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // @Input() selectUser = signal(DUMMY_USERS[this.randomIndex]);
  //selectedUser = signal(DUMMY_USERS[this.randomIndex]);

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  //imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  onSelectUser() {
    //console.log('User selected:', this.selectedUser);
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.selectedUser.emit(this.user.id);
  }
}

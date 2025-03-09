import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

  selectedUser = DUMMY_USERS[this.randomIndex];

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectUser() {
    console.log('User selected:', this.selectedUser);
  }
}

import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //providers: [{ provide: 'u', useValue: DUMMY_USERS }],
})
export class AppComponent {
  static users = DUMMY_USERS;
  selectedUserId?: string;

  get users() {
    return AppComponent.users;
  }

  get SelectedUser() {
    return AppComponent.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

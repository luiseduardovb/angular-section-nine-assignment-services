import { CounterService } from './../counter.service';
import { UsersServices } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent implements OnInit {
  users: string[] = [];

  constructor(
    private userServices: UsersServices,
    private counterService: CounterService
  ) {}

  ngOnInit() {
    this.users = this.userServices.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userServices.onSetToInactive(id);
  }
}

import { CounterService } from './counter.service';
import { UsersServices } from './users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersServices, CounterService],
})
export class AppComponent {}

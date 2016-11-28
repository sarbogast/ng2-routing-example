import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ub-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {
  balance: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  isAuthenticated() {
    return true;
  }

  isAdmin() {
    return true;
  }
}

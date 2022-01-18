import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRequestService } from '../user-request.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  // public githubUserQuery!: string;
  user!: User;
  name = '';
  constructor(public userService: UserRequestService) {}

  ngOnInit(): void {
    this.searchUser('GraceMwende');
  }

  searchUser(username: string) {
    this.userService.userRequest(username);
    this.userService.repoRequest(username);
    this.user = this.userService.user;
  }
}

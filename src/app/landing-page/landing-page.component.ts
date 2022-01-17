import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRequestService } from '../user-request.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  public githubUserQuery!: string;
  user!: User;
  constructor(private userService: UserRequestService) {}

  ngOnInit(): void {}
  searchUser(username: string) {
    this.userService.userRequest(username);
    this.user = this.userService.user;
  }
}

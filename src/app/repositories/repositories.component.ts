import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { UserRequestService } from '../user-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  repo!: Repository;
  constructor(public repoService: UserRequestService) {}

  ngOnInit(): void {
    this.repoService.repoRequest();
    this.repo = this.repoService.repo;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService {
  user!: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', 0, 0, 0, new Date());
  }

  userRequest() {
    interface ApiResponse {
      name: string;
      avatar_url: string;
      bio: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse>(environment.apiUrl)
        .toPromise()
        .then(
          (response) => {
            this.user.name = response!.name;
            this.user.avatar = response!.avatar_url;
            this.user.bio = response!.bio;
            this.user.repos = response!.public_repos;
            this.user.followers = response!.followers;
            this.user.following = response!.following;
            this.user.dateCreated = response!.created_at;

            resolve();
          },
          (error) => {
            this.user.name = 'Grace Mwende Micheni';
            this.user.bio = 'machine engineer';
            this.user.repos = 0;

            reject(error);
          }
        );
    });
    return promise;
  }
}

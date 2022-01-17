import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService {
  user: any = User;
  repo: any = Repository;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '', 0, 0, 0, new Date());
    this.repo = new Repository('', '');
  }

  // users part
  userRequest(username: string) {
    interface ApiResponse {
      name: string;
      avatar_url: string;
      bio: string;
      public_repos: number;
      followers: number;
      following: number;
      created_at: Date;
    }

    let userUrl = 'https://api.github.com/users/' + username;

    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse>(userUrl)
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

            resolve(this.user);
            console.log(this.user);
          },
          (error) => {
            'This user could not be found';
            reject(error);
          }
        );
    });
    return promise;
  }

  repoRequest(username: string) {
    interface ApiResponse2 {
      name: string;
      description: string;
    }

    let repoUrl = 'https://api.github.com/users/' + username + '/repos';

    let promise2 = new Promise<void>((resolve, reject) => {
      this.http
        .get<ApiResponse2>(repoUrl)
        .toPromise()
        .then(
          (response) => {
            this.repo = response;

            resolve(this.repo);
            console.log(this.repo);
          },
          (error) => {
            // this.repo.name = 'ggggggg';
            // this.repo.description = 'lolestttttt';
            'No existing repos found';
            reject(error);
          }
        );
    });
    return promise2;
  }
}

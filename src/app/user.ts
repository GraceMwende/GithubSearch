export class User {
  constructor(
    public name: string,
    public login: string,
    public avatar: string,
    public bio: string,
    public repos: number,
    public followers: number,
    public following: number,
    public dateCreated: Date
  ) {}
}

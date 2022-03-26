import { Repo } from "./Repo";
import { User } from "./User";

export class UserRes {
    login: string;
    name: string;
    repoCount: number;
    followerCount: number;
    repos: Repo[];

    constructor(user: User, repos: Repo[]){
        this.login = user.login;
        this.name = user.name;
        this.repoCount = user.repoCount;
        this.followerCount = user.followerCount;
        this.repos = repos;
    }
}
export class User {
    login: string;
    name: string;
    repoCount: number;
    followerCount: number;

    constructor(userResponse: any) {
        this.login = userResponse.login;
        this.name = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
}
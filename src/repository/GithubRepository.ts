import * as request from "request"
import { Repo } from "../dto/Repo";
import { User } from "../dto/User";

export class GithubRepository {
    options = {
        headers: {
            'User-Agent': 'request'
        },
        json: true
    }

    getUser(userName: string, callback: (user: User) => any) {
        request.get(`https://api.github.com/users/${userName}`, this.options, (error: any, response: any, body: any) => {
            const userResponse: any = body;
            // console.log(userResponse)
            const user = new User(userResponse);
            // console.log(user)
            callback(user)
        });
    }

    getRepos(userName: string, callback: (repos: Repo[]) => any) {
        request.get(`https://api.github.com/users/${userName}/repos`, this.options, (error: any, response: any, body: any) => {
            const reposResponse: any[] = body;
            // console.log(reposResponse)
            const repos: Repo[] = reposResponse.map((element: any) => new Repo(element));
            // console.log(repos)
            callback(repos)
        });
    }
}
import { UserRes } from "../dto/UserRes";
import { Repo } from "../dto/Repo";
import { User } from "../dto/User";
import {GithubRepository} from "../repository/GithubRepository"

const githubRepository = new GithubRepository()

export class GithubService{
    getUserWithRepos(userId: string, callback: (user:UserRes) => any) {
        githubRepository.getUser(userId, (user: User) => {
            //console.log(user)
            githubRepository.getRepos(userId, (repos: Repo[]) => {
                //console.log(repos)
                const userRes = new UserRes(user, repos)
                //console.log(userRes)
                callback(userRes)
            })
        });
    }
}
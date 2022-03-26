import { UserRes } from "./dto/UserRes";
import { GithubService } from "./service/GithubService";

const userId = process.argv[2]
if (!userId) {
    console.log("userId is required");
    process.exit(0)
}

const service = new GithubService();
service.getUserWithRepos(userId, (user: UserRes) =>{
    console.log(user)
});
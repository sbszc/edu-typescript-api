import express from "express"
import { UserRes } from "../dto/UserRes";
import { GithubService } from "../service/GithubService";

const PORT = 8080;
const app = express()
const githubService = new GithubService();

app.get('/getUser/:user', (req, res) => {
    githubService.getUserWithRepos(req.params.user, (user: UserRes) =>{
        console.log(user);
        res.status(200).send(user)
    })
})

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
})
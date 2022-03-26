"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubService_1 = require("./service/GithubService");
var userId = process.argv[2];
if (!userId) {
    console.log("userId is required");
    process.exit(0);
}
var service = new GithubService_1.GithubService();
service.getUserWithRepos(userId, function (user) {
    console.log(user);
});

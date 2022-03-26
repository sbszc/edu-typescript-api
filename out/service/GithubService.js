"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubService = void 0;
var UserRes_1 = require("../dto/UserRes");
var GithubRepository_1 = require("../repository/GithubRepository");
var githubRepository = new GithubRepository_1.GithubRepository();
var GithubService = /** @class */ (function () {
    function GithubService() {
    }
    GithubService.prototype.getUserWithRepos = function (userId, callback) {
        githubRepository.getUser(userId, function (user) {
            //console.log(user)
            githubRepository.getRepos(userId, function (repos) {
                //console.log(repos)
                var userRes = new UserRes_1.UserRes(user, repos);
                //console.log(userRes)
                callback(userRes);
            });
        });
    };
    return GithubService;
}());
exports.GithubService = GithubService;

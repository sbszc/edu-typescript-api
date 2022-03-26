"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRes = void 0;
var UserRes = /** @class */ (function () {
    function UserRes(user, repos) {
        this.login = user.login;
        this.name = user.name;
        this.repoCount = user.repoCount;
        this.followerCount = user.followerCount;
        this.repos = repos;
    }
    return UserRes;
}());
exports.UserRes = UserRes;

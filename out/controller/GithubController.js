"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var GithubService_1 = require("../service/GithubService");
var PORT = 8080;
var app = (0, express_1.default)();
var githubService = new GithubService_1.GithubService();
app.get('/getUser/:user', function (req, res) {
    githubService.getUserWithRepos(req.params.user, function (user) {
        console.log(user);
        res.status(200).send(user);
    });
});
app.listen(PORT, function () {
    console.log("server started at http://localhost:".concat(PORT));
});

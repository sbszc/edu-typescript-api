"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubRepository = void 0;
var request = __importStar(require("request"));
var Repo_1 = require("../dto/Repo");
var User_1 = require("../dto/User");
var GithubRepository = /** @class */ (function () {
    function GithubRepository() {
        this.options = {
            headers: {
                'User-Agent': 'request'
            },
            json: true
        };
    }
    GithubRepository.prototype.getUser = function (userName, callback) {
        request.get("https://api.github.com/users/".concat(userName), this.options, function (error, response, body) {
            var userResponse = body;
            // console.log(userResponse)
            var user = new User_1.User(userResponse);
            // console.log(user)
            callback(user);
        });
    };
    GithubRepository.prototype.getRepos = function (userName, callback) {
        request.get("https://api.github.com/users/".concat(userName, "/repos"), this.options, function (error, response, body) {
            var reposResponse = body;
            // console.log(reposResponse)
            var repos = reposResponse.map(function (element) { return new Repo_1.Repo(element); });
            // console.log(repos)
            callback(repos);
        });
    };
    return GithubRepository;
}());
exports.GithubRepository = GithubRepository;

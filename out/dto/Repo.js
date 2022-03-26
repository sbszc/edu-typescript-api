"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repoResponseElement) {
        this.name = repoResponseElement.full_name;
        this.description = repoResponseElement.description;
        this.url = repoResponseElement.url;
        this.size = repoResponseElement.size;
        this.forkCount = repoResponseElement.forks;
    }
    return Repo;
}());
exports.Repo = Repo;

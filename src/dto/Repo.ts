export class Repo {
    name: string;
    description: string;
    url: string;
    size: number;
    forkCount: number;

    constructor(repoResponseElement: any) {
        this.name = repoResponseElement.full_name;
        this.description = repoResponseElement.description;
        this.url = repoResponseElement.url;
        this.size = repoResponseElement.size;
        this.forkCount = repoResponseElement.forks;
    }
}
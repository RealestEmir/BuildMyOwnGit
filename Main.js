class Git {
    constructor(name) {
        this.name = name; //Repo name
        var repo = new Git("my-repo");
    } 
}

class Commit{
    constructor(id, message){
        this.id = id;
        this.message = message;
    }
}

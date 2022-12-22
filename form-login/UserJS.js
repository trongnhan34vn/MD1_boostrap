class User {
    id;
    name;
    username;
    email;
    password;

    constructor(id, name, username, email, password) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    setID(id) {
        this.id = id;
    }

    getID() {
        return this.id;
    }
}
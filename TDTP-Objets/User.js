class User {

    constructor(name, access, admin) {
        this.username = name;
        this.access = access;
        this.isAdmin = admin;
    }

    profil() {
        return `Username is "${this.username}" and acces are ${this.access}.`;
    }

    hasAccessOf(access) {
        return this.access.includes(access);
    }
}

class ClasseAvecProprietesPrivees {

    #champPriveAvecInitialisateur = 42;

    #methodePrivee() {

    }
}

const instance = new ClasseAvecProprietesPrivees();
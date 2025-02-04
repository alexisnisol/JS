let user = {
    usermane: 'username',
    access: ['user', 'edito'],
    isAdmin: false,
    profil: function() {
        console.log(`Username is "${this.username}" and acces are ${this.access}.`);
    }
}

console.log(typeof user);
console.log(user.profil());

function User(name, access, admin) {
    this.username = name;
    this.access = access;
    this.isAdmin = admin;
    this.profil = function() {
        return `Username is "${this.username}" and acces are ${this.access}.`;
    }
}

User.prototype.hasAccessOf = function (access) {
    return this.access.includes(access);
}

let userFromFunc = new User('username', ['admin', 'backoffice'], false);

console.log(typeof userFromFunc);
console.log(userFromFunc.profil());

console.log(userFromFunc.hasAccessOf('admin'));
console.log(userFromFunc.hasAccessOf('api'));

function Person() {
    this.whoIs = function () {
    return `${this.firstname} ${this.lastname}`;
    }
}

function Client(firstname, lastname) {
    this.__proto__ = new Person();
    this.firstname = firstname;
    this.lastname = lastname;
}

console.log(new Client('moi', 'moi'));

// class User implements UserInterfaceFormatter {
//   constructor(public id: number, public name: string, public email: string) {}
//   formatUser(): string {
//     return `User: ${this.name}, Email: ${this.email}`;
//   }
// }
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    User.prototype.formatUser = function () {
        return "Id: ".concat(this.id, " User: ").concat(this.name, ", Email: ").concat(this.email);
    };
    return User;
}());
var user = new User(1, "John Doe", " sahabulislamsifat@gmail.com");
// console.log(user.id); // 1
// console.log(user); // 1
console.log(user.formatUser()); // 1

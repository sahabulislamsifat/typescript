interface UserInterfaceFormatter {
  formatUser(): string;
}

// class User implements UserInterfaceFormatter {
//   constructor(public id: number, public name: string, public email: string) {}
//   formatUser(): string {
//     return `User: ${this.name}, Email: ${this.email}`;
//   }
// }
class User implements UserInterfaceFormatter {
  constructor(
    private id: number,
    private name: string,
    private email: string
  ) {}
  formatUser(): string {
    return `Id: ${this.id} User: ${this.name}, Email: ${this.email}`;
  }
}

let user = new User(1, "John Doe", " sahabulislamsifat@gmail.com");

// console.log(user.id); // 1
// console.log(user); // 1
console.log(user.formatUser()); // 1

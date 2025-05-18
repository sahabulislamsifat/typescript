// // let user = {
// //   id: 1,
// //   name: "Sifat",
// //   email: "sahabulislamsifat@gmail.com",
// //   age: 25,
// // };
[];
var users = [];
var userOne = {
    id: 1,
    name: "AB Sifat",
    email: "sahabulislamsifat@gmail.com",
    age: 25,
};
var userTwo = {
    id: 1,
    name: "Sifat",
    email: "sahabulislamsifat@gmail.com",
    age: 25,
};
// console.log(user);
// console.log(user.email);
users.push(userOne);
users.push(userTwo);
// console.log(users);
var printUserInfo = function (user) {
    console.log("User ID: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat(user.email, ", Age: ").concat(user.age));
};
users.forEach(function (user) {
    printUserInfo(user);
});

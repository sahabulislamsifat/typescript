// // let user = {
// //   id: 1,
// //   name: "Sifat",
// //   email: "sahabulislamsifat@gmail.com",
// //   age: 25,
// // };

// // let user: {
// //   id: number;
// //   name: string;
// //   email: string;
// //   age: number;
// // } = {
// //   id: 1,
// //   name: "Sifat",
// //   email: "sahabulislamsifat@gmail.com",
// //   age: 25,
// // };

// let users: {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }[] = [];

// let userOne: {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// } = {
//   id: 1,
//   name: "Sifat",
//   email: "sahabulislamsifat@gmail.com",
//   age: 25,
// };

// let userTwo: {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// } = {
//   id: 1,
//   name: "Sifat",
//   email: "sahabulislamsifat@gmail.com",
//   age: 25,
// };

// // console.log(user);
// // console.log(user.email);
// users.push(userOne);
// users.push(userTwo);

// // console.log(users);

// const printUserInfo = (user: {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }) => {
//   console.log(
//     `User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`
//   );
// };

// users.forEach((user) => {
//   printUserInfo(user);
// });
// // let user = {
// //   id: 1,
// //   name: "Sifat",
// //   email: "sahabulislamsifat@gmail.com",
// //   age: 25,
// // };

// // let user: {
// //   id: number;
// //   name: string;
// //   email: string;
// //   age: number;
// // } = {
// //   id: 1,
// //   name: "Sifat",
// //   email: "sahabulislamsifat@gmail.com",
// //   age: 25,
// // };

interface IUser {
  id: number;
  name: string;
  email: string;
  age: number;
}
[] = [];

let users: IUser[] = [];

let userOne: IUser = {
  id: 1,
  name: "AB Sifat",
  email: "sahabulislamsifat@gmail.com",
  age: 25,
};

let userTwo: IUser = {
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

const printUserInfo = (user: IUser) => {
  console.log(
    `User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`
  );
};

users.forEach((user) => {
  printUserInfo(user);
});

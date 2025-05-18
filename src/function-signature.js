// Function Signature
// Function Signature is a way to define the type of a function
// console.log("Hello, I am a TypeScript Function Signature!");
// const userInfo = () => {
//   console.log("Hello, I am a TypeScript Function Signature!");
// };
var userInfo;
var userInfo2;
userInfo = function () {
    console.log("Hello, I am a TypeScript Function Signature!");
};
userInfo2 = function (name, age) {
    console.log("Hello, I am ".concat(name, " and I am ").concat(age, " years old!"));
};
userInfo();
userInfo2("Sifat", 25);

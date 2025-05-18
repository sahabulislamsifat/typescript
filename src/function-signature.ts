// Function Signature
// Function Signature is a way to define the type of a function

// console.log("Hello, I am a TypeScript Function Signature!");

// const userInfo = () => {
//   console.log("Hello, I am a TypeScript Function Signature!");
// };

let userInfo: () => void;
let userInfo2: (name: string, age: number) => void;

userInfo = () => {
  console.log("Hello, I am a TypeScript Function Signature!");
};

userInfo2 = (name: string, age: number) => {
  console.log(`Hello, I am ${name} and I am ${age} years old!`);
};

userInfo();
userInfo2("Sifat", 25);

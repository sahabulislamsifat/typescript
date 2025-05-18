//* Narrwoing types
//? Narrowing types is a technique in TypeScript that allows you to refine the type of a variable within a specific scope. This is particularly useful when working with union types, where a variable can hold multiple types. By using type guards, you can check the type of a variable and then use it safely within that scope.
//? Type guards are expressions that perform runtime checks to ensure that a variable is of a certain type. TypeScript provides several built-in type guards, such as `typeof`, `instanceof`, and user-defined type guards using the `is` keyword.
//? In this example, we will explore how to use narrowing types with union types and type guards in TypeScript. We will create a function that takes a parameter of type `string | number` and returns a string representation of the value. We will use `typeof` to check the type of the parameter and handle each case accordingly.
// function todoList(todos: (string | number)[]): void[] {
//   return todos.map((todo) => {
//     console.log(todo);
//     // if (typeof todo === "string") {
//     //   return `Todo: ${todo}`;
//     // } else if (typeof todo === "number") {
//     //   return `Todo ID: ${todo}`;
//     // } else {
//     //   throw new Error("Invalid type");
//     // }
//   });
// }
// todoList(["Buy groceries", 1, "Clean the house", 2]);
// todoList([1, 2, 3, 4, 5]);
function todoList(todos) {
    if (todos) {
        todos.map(function (todo) { return console.log(todo); });
    }
    else
        console.log("No todos available");
}
// todoList(null); // No todos available
// todoList("Todooo"); // No todos available
var todos = ["Buy groceries", "Clean the house", "Do laundry"];
// todoList(todos); // Buy groceries Clean the house Do laundry
todoList(null); // Buy groceries Clean the house Do laundry
//* Type Assertions
var firstName = "Sahabul Islam Sifat";
var lastName;
// lastName = 123
lastName = "123";

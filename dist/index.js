"use strict";
// console.log("Hello, I am a TypeScript file!");
// const form = document.querySelector("form") as HTMLFormElement;
// const form = document.querySelector("#user-form") as HTMLFormElement;
// console.log(form);
const userForm = document.querySelector("#user-form");
const userNameInput = document.querySelector("#name");
const userEmailInput = document.querySelector("#email");
const userPasswordInput = document.querySelector("#password");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userName = userNameInput.value;
    const userEmail = userEmailInput.value;
    const userPassword = userPasswordInput.value;
    console.log("User Name: ", userName);
    console.log("User Email: ", userEmail);
    console.log("User Password: ", userPassword);
    // Clear the form
    userNameInput.value = "";
    userEmailInput.value = "";
    userPasswordInput.value = "";
});

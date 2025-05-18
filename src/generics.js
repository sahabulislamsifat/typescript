{
    //   function printUserInfo(userId: string) {
    //     console.log(`User ID: ${userId}`);
    //   }
    //   function printUserInfo(userId: string | number | boolean | object) {
    //     console.log(`User ID: ${userId}`);
    //   }
    //   function printUserInfo<T>(userId: T) {
    //     console.log(`User ID: ${userId}`);
    //   }
    //   function printUserInfo<T, S>(userId: T, age: S) {
    //     console.log(`User ID: ${userId} and userAge is: ${age}`);
    //   }
    var printUserInfo = function (userId, age) {
        console.log("User ID: ".concat(userId, " and userAge is: ").concat(age));
    };
    //   printUserInfo("12345");
    //   printUserInfo(12345);
    //   printUserInfo(true);
    //   printUserInfo({ id: 12345 });
    printUserInfo("12345", 25);
    printUserInfo(12345, "25");
    printUserInfo(true, false);
    printUserInfo({ id: 12345 }, { name: "Sifat" });
}

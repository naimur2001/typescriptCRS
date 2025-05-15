"use strict";
console.log("Ami TS");
const number = 10;
console.log(number);
function abcd() {
    const x = 20;
    const y = 60;
    console.log(x + y);
}
abcd();
// tuple
let user = [1, "Ami"];
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "superadmin";
})(userRoles || (userRoles = {}));
var statusCode;
(function (statusCode) {
    statusCode["PENDING"] = "pending";
    statusCode["COMPLETED"] = "completed";
    statusCode["FAILED"] = "failed";
})(statusCode || (statusCode = {}));
function createUser(obj) {
    // obj.name="Ami"
    // obj.email="9E4tT@example.com"
    // obj.password="123456"
}
function adminUser(obj) {
    obj.admin = true;
    obj.name = "mama";
}
createUser({
    name: "Ami",
    email: "9E4tT@example.com",
    password: "123456",
    gender: "male"
});

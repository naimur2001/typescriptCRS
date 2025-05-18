"use strict";
// class BottleMaker{
//     constructor(public name:string){
//     }
// }
// // let bot1 = new BottleMaker("milton", 5000)
// // console.log(b1)
// class metalBottle extends BottleMaker{
//     constructor(public name:string){
//         super(name)
//     }
//     getValue(){
//         console.log(this.name);
//     }
// }
// let bot1 = new metalBottle("pilton  ")
// bot1.getValue()
// class User  {
// constructor (public readonly name:string)
// {
// }
// changeName()
// {
//     this.name = "memon"
// } 
// }
// let user1 = new User("emon")
// user1.changeName()
class User {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    get username() {
        return this.name;
    }
    set username(name) {
        this.name = name;
    }
}
let user1 = new User("emon", 20, "male");

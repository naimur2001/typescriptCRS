"use strict";
class Device {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
let d1 = new Device("laptop", 50000, "electronics");
console.log(d1);
let d2 = new Device("mobile", 20000, "electronics");
console.log(d2);

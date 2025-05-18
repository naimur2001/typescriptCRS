"use strict";
class BootleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new BootleMaker("milton", 5000);
console.log(b1);
class HumanMaker {
    constructor(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = 0;
    }
}
let h1 = new HumanMaker("ami", true);
console.log(h1);
class Music {
    constructor(title, artist, duration, genre) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.genre = genre;
        if (!duration) {
            this.duration = 0;
        }
    }
}
let m1 = new Music("title", "artist", "", "genre");
console.log(m1);

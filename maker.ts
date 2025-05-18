 class BootleMaker {
    constructor(public name:string,public price:number){}
 }

 let b1 = new BootleMaker("milton", 5000)
 console.log(b1)


 class HumanMaker {
    age=0
    constructor(public  name:string,public isHandsome:boolean){

    }
}

let h1= new HumanMaker("ami",true)
console.log(h1)


class Music{
    constructor(public title:string,public artist:string,public duration:number,public genre:string){
  if (!duration) {
    this.duration=0
  }
    }


}

 let m1= new Music("title","artist","","genre",)
console.log(m1);
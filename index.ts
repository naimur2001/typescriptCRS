console.log("Ami TS");
const number = 10;
console.log(number);


function abcd(){
   const x=20
   const y=60
   console.log(x+y)
}

abcd()

// tuple


let user:[number,string]= [1,"Ami"]


enum userRoles{
   ADMIN="admin",
   GUEST="guest",
   SUPER_ADMIN="superadmin"
}

enum statusCode{
   PENDING="pending",
   COMPLETED="completed",
   FAILED="failed"
}  




interface User {
   name: string;
   email: string;
   password: string;
   gender?: string;
}

function createUser(obj: User) {
// obj.name="Ami"
// obj.email="9E4tT@example.com"
// obj.password="123456"
}

interface Admin extends User {
   admin:boolean
}

function adminUser(obj:Admin) {
   obj.admin=true
   obj.name="mama"
}

createUser({
   name:"Ami",
   email:"9E4tT@example.com",
   password:"123456",
   gender:"male"
})
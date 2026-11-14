//Object literals
const mySym = Symbol("key1");

const JsUser = {
    name: "Raushan", 
    "full name": "Raushan Raj",
    [mySym]: "mykey1",
    age: 20,
    location: "Arrah",
    email: "raushan06@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser.mySym);//yha symbol ki trh use nhi ho rha h 
console.log(typeof JsUser.mySym);//string, ye maine square bracket use krne ke phle likha tha
//ye next line important h 
console.log(JsUser[mySym]);//ab ye symbol ki trh use ho rha h 


// JsUser.email = "iamraushanraj45@gmail.com";//overwrite the value 
// Object.freeze(JsUser);//ye use krne ke baad object JsUser mein koi change nhi kr skte 
// JsUser.email = "iamraushanraj45@outlook.com";//ye overwrite nhi hoga kyuki last line mein maine freeze kr diya h object ko
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
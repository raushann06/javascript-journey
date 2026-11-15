const user = {
    username: "Raushan",
    age: 20,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Raj";
// user.welcomeMessage();

// console.log(this);
//global object in browser is window

 
// function coffee(){
//     let username = "Raushan"
//     console.log(this.username);//yha function ke andr aakr this use nhi kr pa rha hu, object ke andr hi use kr skta hu 

// }

// coffee();

// const coffee = function(){
//     let username = "Raushan"
//     console.log(this.username);
// }


const coffee = () => {// Arrow function
    let username = "Raushan"
    console.log(this);
}

// coffee();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => (num1 + num2);//implicit return

console.log(addTwo(45,18));
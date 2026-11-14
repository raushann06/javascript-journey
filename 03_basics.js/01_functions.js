function saymyname(){
    console.log("R");
    console.log("A");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    
}
// saymyname();//ye undefined nhi dega output mein...
// console.log(saymyname());

// function addtwonumbers(num1 , num2){
//     console.log(num1 + num2);
// }

function addtwonumbers(num1 , num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const result = addtwonumbers(5, 8);
console.log("Result: ", result);
 
function userLoginMessage(username){
    if(!username){//here in condition we can also use ( username === undefined)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
//for default value:
// function userLoginMessage(username = "Raj"){//always return Raj as default value
//     return `${username} just logged in`;//if some value is passed then we can simply overwrite the vlaue
// }

// console.log(userLoginMessage(""));//jb koi value use nhi hoti to wo undefined de deta h 
// console.log(userLoginMessage("Raushan"));


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

//console.log(calculateCartPrice(200, 350, 800, 4000));//since 200 & 350 goes with val1 and val2

const user = {
    username: "Raushan",
    age: 20,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);

}

// handleObject(user);
handleObject({
    username: "Raj",
    age: 20
})

const myNewArray = [200, 400, 600, 900];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 900]));

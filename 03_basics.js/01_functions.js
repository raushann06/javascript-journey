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

console.log(userLoginMessage(""));//jb koi value use nhi hoti to wo undefined de deta h 
console.log(userLoginMessage("Raushan"));

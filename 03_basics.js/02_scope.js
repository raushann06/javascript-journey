// let a = 10;
// const b = 20;
// var c = 30;

let a = 300;//Global Scope

if(true){//Block Scope
    let a = 10
    const b = 20
    // console.log("Inner:", a);

}


// console.log(a);
// console.log(b);
// console.log(c);

//Nested Scope
function one(){
    const username = "Raushan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two();
}
// one();


if(true){
    const username = "Raushan"
    if(username === "Raushan"){
        const website = " youtube"
        // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);



//++++++++++++++++++ Intersting ++++++++++++++++++

function addone(num){
    return num + 1;
}

console.log(addone(5));

const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));
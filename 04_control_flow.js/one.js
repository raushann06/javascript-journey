//if

if(true){
    //is scope ka code execute hoga
}

if(false){
    //is scope ka code execute nhi hoga
}
const isUserloggedIn = true;
const temperature = 41;

if(temperature === 41){
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}

if(isUserloggedIn){
    console.log("User is logged in")

}

const score = 200;
if(score > 100){
    //var power = "fly";//var ka space completely global hota h isiliye isko is scope ke bahar bhi access kr skte h isiliye var ko use nhi krenge let use krenge

    let power = "fly";
    console.log(`User power: ${power}`);
}

//console.log(`User power: ${power}`);

const balance = 2000;
// if(balance > 550) console.log("test");

if(balance < 500){
    console.log("less than 500");

}
else if(balance < 750){
    console.log("less than 750");

}
else{
    console.log("less tahn 1200");
}


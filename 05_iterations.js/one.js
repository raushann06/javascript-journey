//for

//syntax of for loop
// for(initilaization; condition; increment/decrement){
//     //code;
// }

for(let index = 0; index < 10; index++){
    const element = index;
    if(element == 5){
        console.log("5 is that number");
    }
    console.log(element);
}


for(let i = 0; i<= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for(let j = 0; j<= 10; j++){
        //console.log(`Inner loop${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j);//printing tables
         
    }
}

let myArray = ["ironman", 'batman', "spiderman", "thor"];
console.log(myArray.length);

// for(let index = 0; index < myArray.length; index++){
//     const element = myArray[index];
//     console.log(element);

// }

//break and continue
// for(let i = 1; i <= 20; i++){
//     if(i == 5){
//         console.log(`Detected 5`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);

// }

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);

}
let score = "45abc";
//console.log(typeof score);

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // NaN => Not a Number

//if null


num = null;
//console.log(typeof num);

let valueInNumber1 = Number(num);
//console.log(typeof num);
//console.log(valueInNumber1); 

/* "45" => 45
"45abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN
*/

let isLoggedIn = "true";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true
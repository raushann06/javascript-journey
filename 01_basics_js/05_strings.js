//Strings can be denoted by both single and double quotes ' or ""

const name = "Raushan";
const age = 20;

console.log(name + " and " + "age" + age);

console.log(`Hello, my name is ${name.toUpperCase()} and my age is ${age}`);
console.log(name.charAt(4));
console.log(name.indexOf("a"));

const newstring = "    Raushan    ";
console.log(newstring.trim());//Remove white spaces from both sides of the string

const url = "https://www.raushan%20raj06.com";
console.log(url.replace("%20", "_"));//Replace %20 with _ in the string

console.log(url.includes("raushan"));//Check if the string contains "raushan" or not
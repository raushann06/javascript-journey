const arr = [0,1,2,3,4,5];
const heros = ["ironman", "thor", "captain america", "scarlet witch"];

const arr2 = new Array(1, 2, 3, 4);

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[3]);

arr.push(6);
arr.push(9);
console.log(arr);

arr.pop();
console.log(arr);

// arr.unshift(8);//add the element at idx 0
// console.log(arr);

// arr.shift();//remove the element present at idx 1
// console.log(arr);

console.log(arr.includes(5));//returns true if present in the array and returns false if not

console.log(arr.indexOf(9));//returns the index value of the element
//if the element is not present then return -1

const newArr = arr.join();//adds all the elements of an array into a string


console.log(arr);
console.log(typeof newArr);

console.log("A", arr);

const myn1 = arr.slice(2,4);//Returns a portion of an array without changing the original array
console.log(myn1);

console.log("B", arr);

const myn2 = arr.splice(2,4);//Adds, removes, or replaces elements in the original array
console.log(myn2);
console.log("C", arr);
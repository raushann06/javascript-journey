let val1 = 10;
let val2 = 5;
function addNum(num1, num2){//Global execution context
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2);
let result2 = addNum(10,2);

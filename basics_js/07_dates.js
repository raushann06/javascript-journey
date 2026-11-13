// let my_date = new Date();
// console.log(my_date.toString());
// console.log(my_date.toDateString());
// console.log(my_date.toTimeString());
// console.log(my_date.toLocaleDateString());

// console.log(typeof my_date);
// console.log(typeof my_date.toLocaleDateString());


// // let my_created_date = new Date(2023, 10, 19);//Months always start with 0 
// // let my_created_date = new Date(2023, 10, 19, 15, 49);//with time 
// // let my_created_date = new Date("2006-01-06");
// //we can use both formats like dd/mm/yy or yy/mm/dd

// let my_created_date = new Date("06-01-2006");
// console.log(my_created_date.toLocaleString());

// let my_time_stamp = Date.now();
// // console.log(my_time_stamp);
// // console.log(my_created_date.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);//since month in js start from 0 so not to get confused we add +1 to get the exact month

console.log(newDate.getDay());

console.log(`The current month is ${newDate.getMonth() + 1} and day is ${newDate.getDay()}`);

const account_id = "24153132045";
let email = "iamraushanraj45@gmail.com";
var password = "Raushan@123";
account_city = "Hyderabad";
let account_state;

//account_id = "45" // not allowed because account_id is a constant
account_city = "Bangalore"; // allowed because account_city is a variable
email = "raus_06@gmail.com"; // allowed because email is a variable
password = "Raushan@1234"; // allowed because password is a variable

console.log(account_id);
/*prefer not to use var 
because of issue in block scope and functional scope. 
Use let and const instead of var
*/

console.table({ account_id, email, password, account_city, account_state});
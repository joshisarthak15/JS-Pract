const accountId=12345
let accountName = "Sarthak"
var accountEmail = "sarthak123@sj.com"
accountCity = "Bhusawal"

// accountId= 2 // value cannot be changed of const variables
console.log(accountId); 

/*
prefer not to use var
because it has block scope and functional scope issue  
*/

console.table([accountId, accountName, accountEmail, accountCity]);


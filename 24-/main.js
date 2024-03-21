var apple = "apple";
var UpperCase = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["Apple", "Mango", "Banana"];
//Boolean test with string
console.log("Test1: Is apple equal gto apple");
console.log(apple == "apple");
console.log("\nTest2: Is apple not equal to apple?");
console.log(apple != "apple");
//Test 3 Lower case
console.log("\nTest 3: Is APPLE equal to apple after converting to lower case?");
console.log(UpperCase.toLowerCase() == "apple");
//Test 4 
console.log("\nTest 4: Is APPLE not equal to apple after converting to lower case?");
console.log(UpperCase.toLowerCase() != "apple");
//Test 5 Numerical Testing
console.log("\nTest 5:Is 10 equal to 20?");
console.log(ten == twenty);
console.log("\nTest 6: Is 10 not equal to 20?");
console.log(ten != twenty);
console.log("\nTest7: Is 10<20?");
console.log(10 < 20);
//Tests using and & or operators
console.log("\nTest 8: Is 20 not equal to 10 and 20 is greater than 10?");
console.log(twenty != ten && twenty > ten);
console.log("\nTest 9: Is 20 not equal to 10 and 20 is greater than 30?");
console.log(twenty != ten && 20 > 30);
//Test using or ||
console.log("\n is 20 greater than 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
//Test Using array value
console.log("\nIs Oranges available?");
console.log(fruits.includes("Oranges"));
console.log("\nIs Apple available?");
console.log(fruits.includes("Apple"));

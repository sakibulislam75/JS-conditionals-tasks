/***

you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
write a simple if-else. 
also, write it using ternary operator.
 */

//-----simple(if else)---//
let num1 = 10;
let num2 = 30;
if (num1 > num2) {
    console.log("The result will be:" + (num1) ** 2);
} else {
    console.log("The result will be:" + (num1 + num2));
}

//------using_ternary_operator-------//
let $result = (num1 > num2) ? (num1 ** 2) : (num1 + num2);
console.log("The result of the ternary operation will :" + $result);
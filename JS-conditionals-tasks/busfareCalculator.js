/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 25;
let isStudent = true;
let regularTicket = 800;
if (age < 10) {
    console.log('free');
} else if (isStudent) {
    console.log("you will get 50% discounts:" + (regularTicket * .5));
} else if (age >= 60) {
    console.log("you will get 15% discoutn:" + (regularTicket * .15));
} else {
    console.log("you have to pay regular ticker fare");
}
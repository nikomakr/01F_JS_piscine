// Declare a function called giveBack
// It takes one argument 'value'
// It returns a new function (an arrow function) that, when called, returns 'value'
const giveBack = (value) => () => value;

// const give5 = giveBack(5);
// const giveHello = giveBack('Hello');

// console.log(give5());     // Output: 5
// console.log(giveHello()); // Output: 'Hello'

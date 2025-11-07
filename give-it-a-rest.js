// Define a function named countArgs that can take any number of arguments
function countArgs() {
  // Inside a function, there is a special built-in object called "arguments"
  // "arguments" holds all the values that were passed into the function
  // "arguments.length" tells us how many arguments were received
  let numberOfArguments = arguments.length;

  // Return (send back) the number of arguments
  return numberOfArguments;
}

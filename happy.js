// Declare a one-line arrow function called happy
// It takes one argument 'question' and returns true/false
// The function checks two things using logical AND (&&):
// 1. The string includes the word 'happy' (case-insensitive)
// 2. The string ends with a question mark '?'
const happy = (question) =>
  question.toLowerCase().includes("happy") && question.endsWith("?");

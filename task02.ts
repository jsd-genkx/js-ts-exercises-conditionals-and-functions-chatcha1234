// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)
const userInput = 45;
// Try changing to "hello", 10, null, NaN


const value = Number(userInput);
if (!isNaN(value)) {
    console.log("It is  number");
}
else {
    console.log("Not  number");
}

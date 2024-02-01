/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


const isPalindrome = (inputChar) => {
    let str = inputChar.toString();
    let resultWord = '';
    for(let i=str.length-1; i>=0; i--)
    {
        resultWord += str[i];
    }
    return (resultWord == str) ? true : false;
}
console.log(isPalindrome('racecar'))

module.exports = isPalindrome;

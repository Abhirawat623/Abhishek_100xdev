/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
let vowels = 'aAeEiIoOuU';

    let vowelsCount = 0;

    for (let i = 0; i < string.length; i++) {

        if (vowels.indexOf(string[i]) !== -1) {

            vowelsCount += 1;

        }

    }

}

module.exports = countVowels;
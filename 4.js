'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.

function countLetters(string) {
  var letters = string.split('');
  var occurences = {};
  letters.forEach(function (letter) {
    if (occurences.hasOwnProperty(letter)) {
      occurences[letter] += 1;
    } else {
      occurences[letter] = 1;
    }
  });
  return occurences;
}

function countLetters2(string) {
  var letters = string.split('');
  var occurences = {};
  letters.forEach(function (letter) {
    occurences[letter] = isNaN(occurences[letter])
      ? 1
      : occurences[letter] + 1
  });
  return occurences;
}

console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
console.log(countLetters2('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}

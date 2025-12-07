/**
 * Given a string sentence, return a compressed version
 * of the sentence where consecutive duplicate words are
 * replaced by the word followed with the number of times it repeats in parentheses.

Only consecutive duplicates are compressed.
Words are separated by single spaces.

*           1. compressString("yes yes yes please") should return "yes(3) please".
    Waiting:2. compressString("I have have have apples") should return "I have(3) apples".
    Waiting:3. compressString("one one three and to the the the the") should return "one(2) three and to the(4)".
    Waiting:4. compressString("route route route route route route tee tee tee tee tee tee") should return "route(6) tee(6)". 
 * 
 */

function solve(sentence) {
  sentence = sentence.trim();
  let duplicateCount = 1;

  const arr = sentence.split(" ");
  let first = 0;
  let second = 1;
  let result = "";
  let compressedString = `(${duplicateCount}) `;
  while (first < arr.length) {
    if (arr[first] != arr[second]) {
      result += arr[first];
      if (duplicateCount > 1) {
        result += `(${duplicateCount})`;
        duplicateCount = 1;
      }
      if (first != arr.length - 1) {
        result += " ";
      }
    } else {
      duplicateCount++;
    }
    first++;
    second++;
  }
  return result || "No result";
}

const test = [
  "yes yes yes please",
  "I have have have apples",
  "one one three and to the the the the",
  "route route route route route route tee tee tee tee tee tee",
];

const resArr = test.map((i) => solve(i));

console.log("THIS IS FROM ARR", resArr);

module.exports = solve;

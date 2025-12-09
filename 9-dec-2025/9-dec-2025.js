/**
 * Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.
        1. mostFrequent(["a", "b", "a", "c"]) should return "a".
Waiting:2. mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]) should return 2.
Waiting:3. mostFrequent([true, false, "false", "true", false]) should return false.
Waiting:4. mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) should return 40.
 */

function mostFrequent(arr) {
  let freq = new Map();
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (freq.has(arr[i])) {
      freq.set(arr[i], freq.get(arr[i]) + 1);
      result = freq.get(result) > freq.get(arr[i]) ? result : arr[i];
    } else {
      freq.set(arr[i], 1);
    }
  }
  return result;
}

const arr = ([40, 20, 70, 30, 10, 40, 10, 50, 40, 60])
console.log(mostFrequent(arr));


module.exports = mostFrequent;

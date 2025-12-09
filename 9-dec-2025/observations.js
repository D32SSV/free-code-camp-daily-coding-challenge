/**
 * an interviewer might point out:

Strengths :-
Uses a Map (correct for mixed types like strings, numbers, booleans)
Tracks the most frequent element while iterating
Passes all provided cases
Easy to understand


Weaknesses / Concerns :-
Result variable logic is slightly awkward
You're updating result only when an existing key is incremented, but 
not when a key first appears (though that’s intentional—still a bit messy).

Uneven readability
The logic could be cleaner by updating the max in one place.

Interviewer may ask for improvement
They might want:

cleaner code

or a more classic look-up solution

or asking whether space can be optimized (Boyer–Moore—but only when a majority element exists)
 */

function mostFrequent(arr) {
  const freq = new Map();
  let maxCount = 0;
  let result = arr[0];

  for (const item of arr) {
    const count = (freq.get(item) || 0) + 1;
    freq.set(item, count);

    if (count > maxCount) {
      maxCount = count;
      result = item;
    }
  }
  
  return result;
}

//Uses Reduce
function mostFrequent(arr) {
  const freq = new Map();
  
  return arr.reduce((result, item) => {
    const count = (freq.get(item) || 0) + 1;
    freq.set(item, count);

    return count > (freq.get(result) || 0) ? item : result;
  }, arr[0]);
}

/**
 * ⭐ Overall Impression

Your solution works, but it signals to an interviewer that you are still developing skills in:

writing clean, idiomatic JavaScript

avoiding unnecessary complexity

thinking about edge cases

naming and structuring code clearly

It does not look like code from a confident mid-level developer, but it does show that you can reason through logic and build a working solution — which is still good.

🔍 What They Would See as Strengths
✔ You understood the problem

You correctly:

split the sentence into words

tracked duplicates

built a compressed output

✔ You implemented a working algorithm

Even if verbose, the core logic is correct.

✔ You used basic control flow properly

Loops, counters, comparisons — all fine.

⚠ What They Would Consider Weak or “Red Flags”

Here are the points an interviewer would notice:

1. Overly manual index handling (first, second)

Using two pointers when one loop index is enough makes the code look:

more complex than necessary,

more error-prone,

less idiomatic for JS.

An interviewer would think you’re not fully comfortable with array iteration patterns.

2. Unused variable compressedString

This looks like leftover or abandoned logic.

This suggests:

a lack of cleanup,

not reviewing code before submitting.

3. Rebuilding strings manually

Manually adding spaces and string concatenation is fragile.
Using push and join() is far more standard.

This signals that you haven't internalized idiomatic JS patterns.

4. Edge cases aren’t handled

For example:

multiple spaces in input

empty string

trailing spaces

punctuation

While not inherently required, interviewers expect awareness of this.

5. Readability and naming

first, second → unclear purpose
result as a string being built manually → messy
duplicateCount reset logic is scattered

An interviewer would likely think:
“This works, but it looks like beginner code.”

⭐ Interviewer's Summary (What they'd actually think)

Here’s the kind of feedback you’d get from a thoughtful interviewer:

“You solved the problem correctly, but the solution is more complicated than necessary. It would help to simplify your logic, remove unused variables, and use more idiomatic JavaScript. With more practice, you’ll write clearer, more maintainable code.”

This is not disqualifying, but it places you around early junior level unless you improve clarity and style.
 */
function solve(sentence) {
  if (!sentence.trim()) return "No result";

  const words = sentence.split(/\s+/);
  let result = [];
  let count = 1;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i + 1]) {
      count++;
    } else {
      result.push(count > 1 ? `${words[i]}(${count})` : words[i]);
      count = 1;
    }
  }

  return result.join(" ");
}

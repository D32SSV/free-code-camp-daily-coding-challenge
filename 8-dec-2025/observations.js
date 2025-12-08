/**
 * Overall interviewer impression
Your solution is:

Correct

Straightforward

Competent

A bit too compact for production

Readable enough for small problems

Good but with room for cleaner structure

Likely verdict:

They would consider this a passing solution, especially for a junior/mid-level position,
but might ask you to refactor it to show you can write more maintainable code.
 */

function convertToKgs(lbs) {
  const conversionFactor = 0.453592;
  const kgNumber = lbs * conversionFactor;
  const kgString = kgNumber.toFixed(2);

  const poundLabel = lbs === 1 ? "pound" : "pounds";
  const kiloLabel = kgString === "1.00" ? "kilogram" : "kilograms";

  return `${lbs} ${poundLabel} equals ${kgString} ${kiloLabel}.`;
}

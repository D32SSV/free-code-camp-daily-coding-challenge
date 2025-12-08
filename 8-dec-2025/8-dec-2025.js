/**
 * Given a weight in pounds as a number, return the string "(lbs) pounds equals (kgs) kilograms.".

Replace "(lbs)" with the input number.
Replace "(kgs)" with the input converted to kilograms, rounded to two decimals and always
include two decimal places in the value.
1 pound equals 0.453592 kilograms.
If the input is 1, use "pound" instead of "pounds".
If the converted value is 1, use "kilogram" instead of "kilograms".
        1. convertToKgs(1) should return "1 pound equals 0.45 kilograms.".
Waiting:2. convertToKgs(0) should return "0 pounds equals 0.00 kilograms.".
Waiting:3. convertToKgs(100) should return "100 pounds equals 45.36 kilograms.".
Waiting:4. convertToKgs(2.5) should return "2.5 pounds equals 1.13 kilograms.".
Waiting:5. convertToKgs(2.20462) should return "2.20462 pounds equals 1.00 kilogram.".
 */

function convertToKgs(lbs) {
  const conversionConstant = 0.453592;

  let kg = (lbs * conversionConstant).toFixed(2);

  return lbs === 1
    ? `${lbs} pound equals ${kg} kilograms.`
    : kg === '1.00'
    ? `${lbs} pounds equals ${kg} kilogram.`
    : `${lbs} pounds equals ${kg} kilograms.`;
}

// const arr = [1, 0, 100, 2.5, 2.20462];
// console.log(arr.map((i) => convertToKgs(i)));

module.exports = convertToKgs;
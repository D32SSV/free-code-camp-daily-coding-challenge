const toRoman = require('./11-dec-2025');

describe('toRoman', () => {
    test('converts basic numbers correctly', () => {
        expect(toRoman(1)).toBe('I');
        expect(toRoman(3)).toBe('III');
        expect(toRoman(5)).toBe('V');
        expect(toRoman(10)).toBe('X');
    });

    test('handles subtractive notation', () => {
        expect(toRoman(4)).toBe('IV');
        expect(toRoman(9)).toBe('IX');
        expect(toRoman(40)).toBe('XL');
        expect(toRoman(90)).toBe('XC');
        expect(toRoman(400)).toBe('CD');
        expect(toRoman(900)).toBe('CM');
    });

    test('converts larger numbers', () => {
        expect(toRoman(58)).toBe('LVIII');     // 50 + 5 + 3
        expect(toRoman(199)).toBe('CXCIX');    // 100 + 90 + 9
        expect(toRoman(944)).toBe('CMXLIV');
        expect(toRoman(2023)).toBe('MMXXIII');
    });

    test('converts very large valid roman numbers', () => {
        expect(toRoman(3999)).toBe('MMMCMXCIX'); // max in standard roman system
    });
});

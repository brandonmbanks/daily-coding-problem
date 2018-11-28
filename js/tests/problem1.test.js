import {twoNumSum} from '../problems/problem1';

test('test it should return true if 2 numbers add up to k', () => {
  expect(twoNumSum([10, 3, 7], 17)).toBe(true);
});

test('test it should return false if 2 numbers dont add up to k', () => {
  expect(twoNumSum([10, 3, 7], 14)).toBe(false);
});

test('test it should return false even if k is in array', () => {
  expect(twoNumSum([10, 3, 7], 7)).toBe(false);
});

test('test it can handle duplicate numbers', () => {
  expect(twoNumSum([7, 7], 14)).toBe(true);
});

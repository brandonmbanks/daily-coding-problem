import {withBruteForce, withAnObject, withASet} from '../problems/problem1';

test('test it should return true if 2 numbers add up to k', () => {
  expect(withBruteForce([10, 3, 7], 17)).toBe(true);
  expect(withAnObject([10, 3, 7], 17)).toBe(true);
  expect(withASet([10, 3, 7], 17)).toBe(true);
});

test('test it should return false if 2 numbers dont add up to k', () => {
  expect(withBruteForce([10, 3, 7], 14)).toBe(false);
  expect(withAnObject([10, 3, 7], 14)).toBe(false);
  expect(withASet([10, 3, 7], 14)).toBe(false);
});

test('test it should return false even if k is in array', () => {
  expect(withBruteForce([10, 3, 7], 7)).toBe(false);
  expect(withAnObject([10, 3, 7], 7)).toBe(false);
  expect(withASet([10, 3, 7], 7)).toBe(false);
});

test('test it can handle duplicate numbers', () => {
  expect(withBruteForce([7, 7], 14)).toBe(true);
  expect(withAnObject([7, 7], 14)).toBe(true);
  expect(withASet([7, 7], 14)).toBe(true);
});

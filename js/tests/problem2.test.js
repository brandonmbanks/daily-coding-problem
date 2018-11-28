import {fn, withoutDivision, withoutDivisionFn} from '../problems/02/solution';

test('test it should return numbers multiplied', () => {
  expect(fn([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  expect(withoutDivision([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  expect(withoutDivisionFn([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
});

test('test it should work with smaller set', () => {
  expect(fn([3, 2, 1])).toEqual([2, 3, 6]);
  expect(withoutDivision([3, 2, 1])).toEqual([2, 3, 6]);
  expect(withoutDivisionFn([3, 2, 1])).toEqual([2, 3, 6]);
});

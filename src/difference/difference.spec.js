import { RemoveValue } from './difference';

describe('Test', () => {
  it('should return the removal value as the second argument from the array', () => {
    expect(RemoveValue([2, 1], [2, 3])).toEqual([1]);
  });
});

describe('Test', () => {
  it('should remove all occurrences of a given element in an array and returns only unique values.', () => {
    expect(RemoveValue([1, 2, 3], [2, 3])).toEqual([1]);
  });
});

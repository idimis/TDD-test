// src/utils/__tests__/sum.test.ts
import { sum } from '../sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum(1, 2)).toBe(3);
    expect(sum(1, 3)).toBe(4);
    expect(sum(2, 2)).toBe(4);
  });

  it('should return the sum of positive and negative numbers', () => {
    expect(sum(-1, 1)).toBe(0);
    expect(sum(5, -2)).toBe(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  it('should throw an error if a non-number is passed', () => {
    expect(() => sum(1, '2')).toThrow('Both arguments must be numbers');
    expect(() => sum('1', 2)).toThrow('Both arguments must be numbers');
    expect(() => sum(1, null)).toThrow('Both arguments must be numbers');
    expect(() => sum(undefined, 2)).toThrow('Both arguments must be numbers');
  });

  it('should return the sum of 5 and 6', () => {
    expect(sum(5, 6)).toBe(11);
  });

  it('should return the sum of 6 and 6', () => {
    expect(sum(6, 6)).toBe(12);
  });
});

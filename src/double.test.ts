import { describe, it, expect } from 'vitest';
import { double } from './double';

describe('double', () => {
  it('double(0) returns 0', () => {
    expect(double(0)).toBe(0);
  });

  it('double(1) returns 2', () => {
    expect(double(1)).toBe(2);
  });

  it('double(-3) returns -6', () => {
    expect(double(-3)).toBe(-6);
  });

  it('double(2.5) returns 5', () => {
    expect(double(2.5)).toBe(5);
  });
});

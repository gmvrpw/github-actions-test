import { expect, test } from 'vitest';

import { sum } from '../src';

test.each([
  { a: 2, b: 2, result: 4 },
  { a: -1, b: 1, result: 0 },
])('should correctly summarize two numbers', ({ a, b, result }) => {
  expect(sum(a, b)).toBe(result);
});

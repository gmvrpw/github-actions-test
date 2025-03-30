import { expect, test } from 'vitest';

import { sum } from '../src';

test.each([
  { a: 2, b: 2, c: 2, result: 6 },
  { a: -1, b: 1, c: 1, result: 1 },
])('should correctly summarize two numbers', ({ a, b, c, result }) => {
  expect(sum(a, b, c)).toBe(result);
});

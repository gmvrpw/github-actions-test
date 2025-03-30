import { expect, test } from 'vitest';

import { power } from '../src';

test.each([
  { a: 2, b: 2, result: 4 },
  { a: -1, b: 2, result: 1 },
])('should correctly summarize two numbers', ({ a, b, result }) => {
  expect(power(a, b)).toBe(result);
});

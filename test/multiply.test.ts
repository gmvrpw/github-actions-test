import { expect, test } from 'vitest';

import { multiply } from '../src';

test.each([
  { a: 2, b: 2, result: 4 },
  { a: -1, b: 1, result: -1 },
])('should correctly summarize two numbers', ({ a, b, result }) => {
  expect(multiply(a, b)).toBe(result);
});

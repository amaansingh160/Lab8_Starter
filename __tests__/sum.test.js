// sum.test.js

import { expect } from "@jest/globals";

test('adds 1 + 2 to equal 3', () => {
  var both = sum(1 , 2);
  expect(both).toBe(3);
});
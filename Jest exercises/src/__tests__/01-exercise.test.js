import { add } from "../utils/numbers";

/**
 * Finish the test so that it checks if the result
 * of calling the add function with the arguments of
 * 2 and 4 is 6
 */
describe("01-exercise", () => {
  test("add return the sum of the numbers", () => {
    const a = 3;
    const b = 2;
    const result = add(a, b);
    expect(result).toBe(5);
    expect(add(a,b)).toBe(5);

    // Finish the test
  });
});

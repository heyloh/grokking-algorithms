import { binarySearch } from "./binary-search";

describe("Binary Search", () => {
  it("should return 2 when given 5", () => {
    expect(binarySearch([1,3,5,7,9], 5)).toBe(2)
  });

  it("should return 1 when given 3", () => {
    expect(binarySearch([1,3,5,7,9], 3)).toBe(1)
  });

  it("should return 3 when given 7", () => {
    expect(binarySearch([1,3,5,7,9], 7)).toBe(3)
  });

  it("should return null when given -1", () => {
    expect(binarySearch([1,3,5,7,9], -1)).toBe(null)
  });
});

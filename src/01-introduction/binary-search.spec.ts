import { binarySearch } from "./binary-search";

describe("Binary Search", () => {
  it("should return 2 when given 5", () => {
    const { position } = binarySearch([1,3,5,7,9], 5)
    expect(position).toBe(2)
  });

  it("should return 1 when given 3", () => {
    const { position } = binarySearch([1,3,5,7,9], 3)
    expect(position).toBe(1)
  });

  it("should return 3 when given 7", () => {
    const { position } = binarySearch([1,3,5,7,9], 7)
    expect(position).toBe(3)
  });

  it("should return null when given -1", () => {
    const { position } = binarySearch([1,3,5,7,9], -1)
    expect(position).toBe(null)
  });

  it("should take 8 steps to search a list with 128 items", () => {
    const { steps } = binarySearch([...Array(128).keys()], 127)
    expect(steps).toBe(8)
  })

  it("should take 9 steps to search a list with 256 items", () => {
    const { steps } = binarySearch([...Array(256).keys()], 255)
    expect(steps).toBe(9)
  })
});
